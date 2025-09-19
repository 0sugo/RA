"use client";
import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Play,
  ExternalLink,
  ArrowRight,
  Calendar,
  Users,
  Shield,
  Building2,
  ChevronRight,
  ChevronLeft,
  FileText,
  CreditCard,
  Search,
} from "lucide-react";
import Image from "next/image";
import {} from "lucide-react";
import { getServicesNow } from "@/data/contents";


const Hero = () => {
    const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const res = await fetch("https://kra-api.sokoflow.com/api/page-contents");
        const data = await res.json();
        console.log("API response:", data);
        if (data?.data?.length > 0) {
          setPageContent(data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching page content:", error);
      }
    };

    fetchPageContent();
  }, []);

  useEffect(() => {
    console.log("useEffect started...");
    getServicesNow().then((res) => {
      console.log("Full API response:", res);
      setServicesListNow(res.data);
    });
  }, []);

  //  useEffect(() => {
  //   getServices().then((res) => {
  //     console.log("Fetched titles:", res.data.map(s => s.title));
  //     setServicesList(res.data);
  //   });
  // }, []);

  useEffect(() => {
    let angle = 0;
    let frame;

    const animate = () => {
      angle = (angle + 1) % 360; // increase angle
      setBeadAngle(angle);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  const services = [
    { name: "iTax", icon: "/itax.png", angle: 0 },
    { name: "E-Tims", icon: "/etims.webp", angle: 60 },
    { name: "M-Service", icon: "/mservice.webp", angle: 120 },
    { name: "i-cms", icon: "/icms.png", angle: 180 },
    { name: "EGMS", icon: "/egms.png", angle: 240 },
    { name: "CRM", icon: "/kra-crm-logo.jpg", angle: 300 },
  ];



  return (
    <section className="bg-gradient-to-br py-12 lg:py-20 bg-cover bg-center ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                {pageContent ? (
                  <>
                    {pageContent.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-[#ff0613] block">
                      {pageContent.title.split(" ").slice(-1)}
                    </span>
                  </>
                ) : (
                  "Loading..."
                )}
              </h1>
                <p className="text-xl text-[#000000] leading-relaxed">
                {pageContent?.content ||
                  " "}
              </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#ff0613] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center">
                  Access iTax Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-[#ff0613] text-[#ff0613] px-8 py-3 rounded-lg font-semibold hover:bg-[#d80000] hover:border-[#d80000] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative flex justify-end items-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center bg-[#d80000] rounded-full">
                    <div className="relative border-white border-2 p-9 rounded-full flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <div className="w-6 h-6 bg-white rounded-full animate-orbit" />
                      </div>

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
                        
                        <Image
                          src={service.icon}
                          alt={service.name}
                          width={45}
                          height={45}
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
  )
}

export default Hero
