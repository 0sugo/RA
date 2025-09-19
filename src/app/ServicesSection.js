"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch("http://localhost:1337/api/services?populate=icon");
        const data = await res.json();

        if (data?.data) {
          const formatted = data.data.map((item, index, arr) => {
            const baseUrl = "http://localhost:1337";
            const imageUrl =
              item.icon?.formats?.thumbnail?.url ||
              item.icon?.url ||
              "";

            return {
              name: item.title,
              description: item.description,
              icon: baseUrl + imageUrl,
              angle: (360 / arr.length) * index, // spread evenly
              link: item.externalUrl,
            };
          });

          setServices(formatted);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    }

    fetchServices();
  }, []);

  return (
    <section className="bg-gradient-to-br py-12 lg:py-20 bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE STATIC CONTENT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Kenya Revenue
                <span className="text-[#ff0613] block">Authority</span>
              </h1>
              <p className="text-xl text-[#000000] leading-relaxed">
                Enhancing revenue collection and facilitating voluntary tax
                compliance through quality service delivery
              </p>
            </div>

            {services[0] && (
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={services[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff0613] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  Access {services[0].name} Portal
                </a>
                <button className="border-2 border-[#ff0613] text-[#ff0613] px-8 py-3 rounded-lg font-semibold hover:bg-[#d80000] hover:border-[#d80000] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE - CIRCLE WITH SERVICES */}
          <div className="relative flex justify-end items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center bg-[#d80000] rounded-full">
                  <div className="relative border-white border-2 p-9 rounded-full flex items-center justify-center">
                    <div className="w-42 h-42 rounded-full flex items-center justify-center shadow-2xl">
                      <Image
                        src="/lion.png"
                        alt="lion logo"
                        width={250}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* MAP SERVICES */}
              {services.map((service, index) => {
                const radius = 176;
                const angleInRadians = (service.angle * Math.PI) / 180;
                const x = Math.cos(angleInRadians) * radius;
                const y = Math.sin(angleInRadians) * radius;

                return (
                  <div
                    key={service.name}
                    className="absolute w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer group"
                    style={{
                      left: `58%`,
                      top: `57%`,
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    }}
                  >
                    <div className="text-center">
                      <img
                        src={service.icon}
                        alt={service.name}
                        width={250}
                        height={250}
                      />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {service.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
