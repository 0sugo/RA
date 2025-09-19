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
import { Globe, User, Briefcase, Landmark } from "lucide-react";
import {} from "lucide-react";
import { getServices } from "@/data/contents";
import { getServicesNow } from "@/data/contents";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import NewsComponent from "./NewsComponent";
import ServicesSection from "./ServicesSection";
import Hero from "./Hero";
import FloatingNav from "./FloatingNav";

// #ff0613
// #d80000
const KRALandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("videos");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ussdActiveTab, setUssdActiveTab] = useState("ussd");
  const [searchOpen, setSearchOpen] = useState(false);
  const [servicesList, setServicesList] = useState([]);
  const [servicesListNow, setServicesListNow] = useState([]);
  const [beadAngle, setBeadAngle] = useState(0);

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
    { name: "iTax", icon: "/iTax.webp", angle: 0 },
    { name: "E-Tims", icon: "/etims.webp", angle: 60 },
    { name: "M-Service", icon: "/mservice.webp", angle: 120 },
    { name: "i-cms", icon: "/icms.png", angle: 180 },
    { name: "EGMS", icon: "/egms.png", angle: 240 },
    { name: "CRM", icon: "/kra-crm-logo.jpg", angle: 300 },
  ];

  const slides = [
    { title: "iTax Portal", image: "/api/placeholder/600/400" },
    { title: "E-Tims System", image: "/api/placeholder/600/400" },
    { title: "M-Service Platform", image: "/api/placeholder/600/400" },
    { title: "KCMS Dashboard", image: "/api/placeholder/600/400" },
  ];

  const newsItems = [
    {
      id: 1,
      image: "/api/placeholder/300/200",
      title: "New Tax Compliance Guidelines Released",
      description:
        "KRA announces updated guidelines for tax compliance in 2025.",
      date: "2025-01-15",
    },
    {
      id: 2,
      image: "/api/placeholder/300/200",
      title: "Digital Tax Payment Solutions",
      description:
        "Enhanced digital payment options now available for all taxpayers.",
      date: "2025-01-10",
    },
    {
      id: 3,
      image: "/api/placeholder/300/200",
      title: "Tax Education Program Launch",
      description: "KRA launches comprehensive tax education program for SMEs.",
      date: "2025-01-05",
    },
  ];

  const tutorials = [
    {
      title: "File an Income Tax Return",
      thumbnail: "/api/placeholder/300/200",
      duration: "5:30",
    },
    {
      title: "File a Nil Return",
      thumbnail: "/api/placeholder/300/200",
      duration: "3:15",
    },
    {
      title: "File Withholding Tax Return",
      thumbnail: "/api/placeholder/300/200",
      duration: "4:45",
    },
    {
      title: "Register for iTax",
      thumbnail: "/api/placeholder/300/200",
      duration: "6:20",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const states = ["Home", "Individual", "Business", "Investor", "Agent"];
  const Individual = [
    "Pin registration",
    "PIN Registration",
    "Filing & Paying",
    "Importing & Exporting",
    "Special Needs",
    "Alternative Dispute Resolution(ADR)",
    "Diaspora Affairs",
    "Legacy Ledger Reconciliation",
  ];
  const Business = [
    "Companies & Partnerships",
    "Compliance & Penalties",
    "Not-For-Profit",
    "Societies",
    "Taxation for Societies",
    "PIN Registration",
    "Types of Taxes",
    "Filing & Paying Taxes",
    "Incentives & Exemptions",
    "Authorized Economic Operators (AEO)",
    "Alternative Dispute Resolution",
    "eTIMS",
  ];
  const Investor = [
    "Incentives & Certification",
    "PIN Registration",
    "Investment Procedures",
  ];
  const agents = ["Customs Agent", "Tax Agents"];

  const stateContent = {
    Home: [
      { name: "e-Filing", icon: FileText },
      { name: "e-Payment", icon: CreditCard },
      { name: "Tax Registration", icon: Building2 },
      { name: "Customs", icon: Globe },
    ],

    Individual: [
      { name: "PIN Registration", icon: User },
      { name: "Filing & Paying", icon: FileText },
      { name: "Special Needs", icon: Globe },
      { name: "Diaspora Affairs", icon: Landmark },
    ],

    Business: [
      { name: "Companies & Partnerships", icon: Building2 },
      { name: "Compliance & Penalties", icon: CreditCard },
      { name: "Types of Taxes", icon: FileText },
      { name: "eTIMS", icon: Globe },
    ],

    Investor: [
      { name: "Incentives & Certification", icon: Briefcase },
      { name: "Investment Procedures", icon: Building2 },
    ],

    Agent: [
      { name: "Customs Agent", icon: Globe },
      { name: "Tax Agent", icon: User },
    ],
  };

  const [active, setActive] = useState(0);

  const nextState = () => setActive((prev) => (prev + 1) % states.length);
  const prevState = () =>
    setActive((prev) => (prev - 1 + states.length) % states.length);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Image src="/kra.png" alt="" width={200} height={200} />

            {/* Desktop Menu */}
            {/* <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>
                <a
                  href="#procurement"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  E-Procurement
                </a>
                <a
                  href="#careers"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Careers
                </a>
                <a
                  href="#news"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  News Centre
                </a>
                <a
                  href="#itax"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  iTax
                </a>
                <button className="bg-[#ff0613] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">
                  Online Services
                </button>

                <div
                  className={"flex items-center bg-white rounded-full shadow-md overflow-hidden transition-all duration-500 max-w-xs px-4 opacity-100"}>
                  <Search className="text-gray-500 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search KRA services..."
                    className={"flex-grow focus:outline-none text-gray-700 bg-transparent py-2 transition-opacity duration-500 opacity-100"}
                  />
                </div>
              </div>
            </div> */}

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>
                <a
                  href="#procurement"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  E-Procurement
                </a>
                <a
                  href="#careers"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Careers
                </a>
                <a
                  href="#news"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  News Centre
                </a>
                <a
                  href="#itax"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  iTax
                </a>

                {/* Search styled like nav */}
                <div className="flex border border-[#d80000] px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                  <Search className="w-4 h-4 mr-2" />
                  <input
                    type="text"
                    placeholder="Search KRA services..."
                    className="bg-transparent focus:outline-none placeholder-gray-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-red-600"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium"
                >
                  About Us
                </a>
                <a
                  href="#procurement"
                  className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium"
                >
                  E-Procurement
                </a>
                <a
                  href="#careers"
                  className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium"
                >
                  Careers
                </a>
                <a
                  href="#news"
                  className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium"
                >
                  News Centre
                </a>
                <a
                  href="#itax"
                  className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium"
                >
                  iTax
                </a>
                <button className="w-full text-left bg-[#ff0613] text-white px-3 py-2 text-base font-medium hover:bg-red-700 rounded-md mt-2">
                  Online Services
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* <section className="bg-gradient-to-br py-12 lg:py-20 bg-cover bg-center " style={{ backgroundImage: "url('/contact.webp')",backgroundRepeat: "no-repeat", }}> */}
      {/* hero old section */}
      {/* <section className="bg-gradient-to-br py-12 lg:py-20 bg-cover bg-center ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
      </section> */}
      <Hero />


      {/* <ServicesSection /> */}
      

      {/* <section className="py-12 bg-gray-50 relative">
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-no-repeat bg-contain pointer-events-none"
        />
        <div className="absolute -top-6 left-1/2 -translate-x-1/2  backdrop-blur-3xl px-6 py-6 w-[80%] mx-auto rounded-3xl">

          <div className="absolute inset-0 bg-gradient-to-br from-[#ff0613]/20 via-black/30 to-[#d80000]/20 backdrop-blur-md rounded-3xl"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl"></div>

          <div className="w-full mb-4">
            <div className="flex items-center bg-white rounded-full shadow-md px-4 py-5">
              <Search className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Type to search services...e.g File returns"
                className="flex-grow focus:outline-none text-gray-700"
              />
            </div>
          </div>

          <div className="p-4">
            <div className="flex justify-around items-center text-black">
              {stateContent[states[active]].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <Icon className="h-10 w-10 mb-1" />
                    <span className="text-sm">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-12 bg-gray-50 relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-no-repeat bg-contain pointer-events-none" />

        <div className="absolute -top-6 left-1/2 -translate-x-1/2 backdrop-blur-3xl px-6 py-6 w-[80%] mx-auto rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10 backdrop-blur-md rounded-3xl"></div>

          <div className="relative p-4 z-10">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center justify-around gap-4">
                <div className="flex gap-10 overflow-x-auto scrollbar-hide">
                  {states.map((state, idx) => (
                    <button
                      key={state}
                      onClick={() => setActive(idx)}
                      className={`relative flex items-center font-medium transition-colors ${
                        active === idx
                          ? "text-[#d80000]"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {state}
                      {active === idx && (
                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-6 bg-[#d80000] rounded-full"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>


              <div className="flex items-center gap-2">
                <div
                  className={`flex items-center bg-white rounded-full shadow-md overflow-hidden transition-all duration-500 
                  ${
                    searchOpen
                      ? "max-w-xs px-4 opacity-100"
                      : "max-w-0 px-0 opacity-0"
                  }`}
                >
                  <Search className="text-gray-500 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search KRA services..."
                    className={`flex-grow focus:outline-none text-gray-700 bg-transparent py-2 transition-opacity duration-500 ${
                      searchOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                <button
                  onClick={() => setSearchOpen((prev) => !prev)}
                  className="p-2 rounded-full bg-white hover:bg-white/30 transition"
                >
                  <Search className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>

            <div className="flex justify-around items-center text-black">
              {stateContent[states[active]].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <Icon className="h-10 w-10 mb-1 text-black" />
                    <span className="text-sm text-black font-semibold">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}
      <FloatingNav />

      <section className="pt-44">
         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest News & Updates
          </h2>
        <NewsComponent />

      </section>



      {/* <section className="py-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-gray-600 text-lg">
              Stay informed with the latest developments from KRA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">News Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-red-600 hover:text-red-700 font-medium flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ff0613] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Visit Our News Centre
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch KRA TV
            </button>
          </div>
        </div>
      </section> */}

      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tutorials & Important Links
            </h2>
            <p className="text-gray-600 text-lg">
              Learn how to use our services with step-by-step guides
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8 border-b">
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-3 font-medium border-b-2 ${
                activeTab === "videos"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Video Tutorials
            </button>
            <button
              onClick={() => setActiveTab("slides")}
              className={`px-6 py-3 font-medium border-b-2 ${
                activeTab === "slides"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Google Slides Tutorial
            </button>
            <button
              onClick={() => setActiveTab("links")}
              className={`px-6 py-3 font-medium border-b-2 ${
                activeTab === "links"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Important Links
            </button>
          </div>

          {activeTab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video bg-gray-200 flex items-center justify-center">
                    <Play className="h-12 w-12 text-red-600" />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">
                      {tutorial.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "slides" && (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-lg p-8 inline-block">
                <h3 className="text-xl font-semibold mb-4">
                  Google Slides Tutorials
                </h3>
                <p className="text-gray-600 mb-6">
                  Interactive presentations to guide you through KRA services
                </p>
                <button className="bg-[#ff0613] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  View Slide Presentations
                </button>
              </div>
            </div>
          )}

          {activeTab === "links" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Tax Calculator",
                "Payment Guidelines",
                "Forms & Documents",
                "Tax Rates",
                "Compliance Calendar",
                "Contact Directory",
              ].map((link, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{link}</h3>
                  <button className="text-red-600 hover:text-red-700 flex items-center">
                    Access <ExternalLink className="ml-1 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section> */}

      <section className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tutorials & Important Links
          </h2>
          <p className="text-gray-600 text-lg">
            Learn how to use our services with step-by-step guides
          </p>
        </div>
        <div className=" bg-gray-50 relative flex w-full">
          {/* Black background block */}
          <div className="bg-black w-1/2 min-h-[550px] rounded-xl relative p-8 flex flex-col justify-between">
            <div className="pt-10 pl-28">
              <div className="mb-8">
                <h2 className="text-lg lg:text-2xl font-bold text-white mb-4">
                  Tutorials & Important Links
                </h2>
                <p className="text-white/80 text-lg max-w-sm">
                  Learn how to use our services with step-by-step guides
                </p>
              </div>

              <ol className="space-y-4 text-white/60 text-base list-inside">
                <li className="hover:text-[#d80000] transition-colors cursor-pointer underline">
                  File Income Tax Return (IT1 Option - Excel)
                </li>
                <li className="hover:text-[#d80000] transition-colors cursor-pointer underline">
                  File a NIL Return
                </li>
                <li className="hover:text-[#d80000] transition-colors cursor-pointer underline">
                  File Withholding Income Tax Returns
                </li>
                <li className="hover:text-[#d80000] transition-colors cursor-pointer underline">
                  File an Amended Income Tax Return
                </li>
              </ol>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button className="bg-[#ff0613] text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Visit Our News Centre
                </button>
                <button className="border-2 border-red-600 text-red-600 px-4 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch KRA TV
                </button>
              </div>
            </div>
          </div>

          {/* White floating card */}
          <div className="absolute top-13 left-1/2 transform -translate-x-1/4 bg-white rounded-3xl shadow-xl p-6 w-[750px] max-w-5xl h-[450px]">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              File Income Tax Return (IT1 Option - Excel)
            </h3>

            <div className="relative w-full h-[90%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/H9VwiO506Ss?start=12"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ff0613] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
            <div className="flex justify-center ">
              {ussdActiveTab === "ussd" ? (
                <Image
                  src="/mobile.svg"
                  alt="USSD Mobile"
                  height={600}
                  width={600}
                  className="absolute -top-50"
                />
              ) : (
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp Mobile"
                  height={600}
                  width={600}
                  className="absolute -top-50"

                />
              )}
            </div>

            <div>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setUssdActiveTab("ussd")}
                  className={`p-4 rounded-2xl transition ${
                    ussdActiveTab === "ussd"
                      ? "bg-white text-red-600 font-bold"
                      : "bg-red-300/30"
                  }`}
                >
                  USSD
                </button>
                <button
                  onClick={() => setUssdActiveTab("whatsapp")}
                  className={`p-4 rounded-2xl transition ${
                    ussdActiveTab === "whatsapp"
                      ? "bg-white text-red-600 font-bold"
                      : "bg-red-300/30"
                  }`}
                >
                  WhatsApp
                </button>
              </div>

              {ussdActiveTab === "ussd" ? (
                <>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Access KRA Services on USSD
                  </h2>
                  <p className="text-lg mb-8">
                    Get instant access to KRA services on your mobile phone. No
                    internet required for USSD services.
                  </p>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-3" />
                    <span className="text-lg font-semibold">
                      Dial *572# for USSD Services
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Access KRA Services on WhatsApp
                  </h2>
                  <p className="text-lg mb-8">
                    You can now register for ETIMS, create sales invoices,
                    register for KRA PIN and more via WhatsApp.
                  </p>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💬</span>
                    <span className="text-lg font-semibold">
                      WhatsApp: +254 793 540 774
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#424242] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Newsletter */}
            <div className="max-w-sm">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Stay updated with KRA news and updates
              </p>
              <form className="flex w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md bg-[white] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff0613]"
                />
                <button
                  type="submit"
                  className="bg-[#ff0613] px-5 py-2 rounded-r-md font-medium hover:bg-red-700 transition-colors"
                >
                  <ArrowRight />
                </button>
              </form>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Contact Us
              </h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-[#ff0613]" />
                  <span>
                    Times Tower, Haile Selassie Ave
                    <br />
                    P.O. Box 48240-00100
                    <br />
                    Nairobi, Kenya
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-[#ff0613]" />
                  <span>+254 20 281 7000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-[#ff0613]" />
                  <span>info@kra.go.ke</span>
                </div>
              </div>
            </div>

            {/* About KRA */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                About KRA
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff0613] transition-colors"
                  >
                    Who we are
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff0613] transition-colors"
                  >
                    Corporate Plan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff0613] transition-colors"
                  >
                    Privacy Statement
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff0613] transition-colors"
                  >
                    Policies
                  </a>
                </li>
              </ul>
            </div>

            {/* Helping Taxpayers */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Helping Taxpayers
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff0613] transition-colors"
                  >
                    iTax Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff0613] transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff0613] transition-colors"
                  >
                    Complaints
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ff0613] transition-colors"
                  >
                    Tax Calculator
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; KRA 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KRALandingPage;
