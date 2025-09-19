// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   ChevronDown,
//   Menu,
//   X,
//   Phone,
//   Mail,
//   MapPin,
//   Play,
//   ExternalLink,
//   ArrowRight,
//   Calendar,
//   Users,
//   Shield,
//   Building2,
//   ChevronRight,
//   ChevronLeft,
//   FileText,
//   CreditCard,
//   Search,
// } from "lucide-react";
// import Image from "next/image";
// import { Globe, User, Briefcase, Landmark } from "lucide-react";
// import {} from "lucide-react";
// import { getServices } from "@/data/contents";
// import { getServicesNow } from "@/data/contents";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import NewsComponent from "./NewsComponent";
// import ServicesSection from "./ServicesSection";
// import Hero from "./Hero";

// const FloatingNav = () => {

//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//       const [activeDropdown, setActiveDropdown] = useState(null);
//       const [activeTab, setActiveTab] = useState("videos");
//       const [currentSlide, setCurrentSlide] = useState(0);
//       const [ussdActiveTab, setUssdActiveTab] = useState("ussd");
//       const [searchOpen, setSearchOpen] = useState(false);
//       const [servicesList, setServicesList] = useState([]);
//       const [servicesListNow, setServicesListNow] = useState([]);
//       const [beadAngle, setBeadAngle] = useState(0);
    
//       useEffect(() => {
//         console.log("useEffect started...");
//         getServicesNow().then((res) => {
//           console.log("Full API response:", res);
//           setServicesListNow(res.data);
//         });
//       }, []);
    
//       //  useEffect(() => {
//       //   getServices().then((res) => {
//       //     console.log("Fetched titles:", res.data.map(s => s.title));
//       //     setServicesList(res.data);
//       //   });
//       // }, []);
    
//       useEffect(() => {
//         let angle = 0;
//         let frame;
    
//         const animate = () => {
//           angle = (angle + 1) % 360; // increase angle
//           setBeadAngle(angle);
//           frame = requestAnimationFrame(animate);
//         };
    
//         frame = requestAnimationFrame(animate);
    
//         return () => cancelAnimationFrame(frame);
//       }, []);
    
//       const services = [
//         { name: "iTax", icon: "/iTax.webp", angle: 0 },
//         { name: "E-Tims", icon: "/etims.webp", angle: 60 },
//         { name: "M-Service", icon: "/mservice.webp", angle: 120 },
//         { name: "i-cms", icon: "/icms.png", angle: 180 },
//         { name: "EGMS", icon: "/egms.png", angle: 240 },
//         { name: "CRM", icon: "/kra-crm-logo.jpg", angle: 300 },
//       ];
    
//       const slides = [
//         { title: "iTax Portal", image: "/api/placeholder/600/400" },
//         { title: "E-Tims System", image: "/api/placeholder/600/400" },
//         { title: "M-Service Platform", image: "/api/placeholder/600/400" },
//         { title: "KCMS Dashboard", image: "/api/placeholder/600/400" },
//       ];
    
//       const newsItems = [
//         {
//           id: 1,
//           image: "/api/placeholder/300/200",
//           title: "New Tax Compliance Guidelines Released",
//           description:
//             "KRA announces updated guidelines for tax compliance in 2025.",
//           date: "2025-01-15",
//         },
//         {
//           id: 2,
//           image: "/api/placeholder/300/200",
//           title: "Digital Tax Payment Solutions",
//           description:
//             "Enhanced digital payment options now available for all taxpayers.",
//           date: "2025-01-10",
//         },
//         {
//           id: 3,
//           image: "/api/placeholder/300/200",
//           title: "Tax Education Program Launch",
//           description: "KRA launches comprehensive tax education program for SMEs.",
//           date: "2025-01-05",
//         },
//       ];
    
//       const tutorials = [
//         {
//           title: "File an Income Tax Return",
//           thumbnail: "/api/placeholder/300/200",
//           duration: "5:30",
//         },
//         {
//           title: "File a Nil Return",
//           thumbnail: "/api/placeholder/300/200",
//           duration: "3:15",
//         },
//         {
//           title: "File Withholding Tax Return",
//           thumbnail: "/api/placeholder/300/200",
//           duration: "4:45",
//         },
//         {
//           title: "Register for iTax",
//           thumbnail: "/api/placeholder/300/200",
//           duration: "6:20",
//         },
//       ];
    
//       const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       };
    
//       const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//       };
    
//       const states = ["Home", "Individual", "Business", "Investor", "Agent"];
//       const Individual = [
//         "Pin registration",
//         "PIN Registration",
//         "Filing & Paying",
//         "Importing & Exporting",
//         "Special Needs",
//         "Alternative Dispute Resolution(ADR)",
//         "Diaspora Affairs",
//         "Legacy Ledger Reconciliation",
//       ];
//       const Business = [
//         "Companies & Partnerships",
//         "Compliance & Penalties",
//         "Not-For-Profit",
//         "Societies",
//         "Taxation for Societies",
//         "PIN Registration",
//         "Types of Taxes",
//         "Filing & Paying Taxes",
//         "Incentives & Exemptions",
//         "Authorized Economic Operators (AEO)",
//         "Alternative Dispute Resolution",
//         "eTIMS",
//       ];
//       const Investor = [
//         "Incentives & Certification",
//         "PIN Registration",
//         "Investment Procedures",
//       ];
//       const agents = ["Customs Agent", "Tax Agents"];
    
//       const stateContent = {
//         Home: [
//           { name: "e-Filing", icon: FileText },
//           { name: "e-Payment", icon: CreditCard },
//           { name: "Tax Registration", icon: Building2 },
//           { name: "Customs", icon: Globe },
//         ],
    
//         Individual: [
//           { name: "PIN Registration", icon: User },
//           { name: "Filing & Paying", icon: FileText },
//           { name: "Special Needs", icon: Globe },
//           { name: "Diaspora Affairs", icon: Landmark },
//         ],
    
//         Business: [
//           { name: "Companies & Partnerships", icon: Building2 },
//           { name: "Compliance & Penalties", icon: CreditCard },
//           { name: "Types of Taxes", icon: FileText },
//           { name: "eTIMS", icon: Globe },
//         ],
    
//         Investor: [
//           { name: "Incentives & Certification", icon: Briefcase },
//           { name: "Investment Procedures", icon: Building2 },
//         ],
    
//         Agent: [
//           { name: "Customs Agent", icon: Globe },
//           { name: "Tax Agent", icon: User },
//         ],
//       };
    
//       const [active, setActive] = useState(0);
    
//       const nextState = () => setActive((prev) => (prev + 1) % states.length);
//       const prevState = () =>
//         setActive((prev) => (prev - 1 + states.length) % states.length);
//   return (
//     <section className="py-12 bg-gray-50 relative">
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-no-repeat bg-contain pointer-events-none" />

//         <div className="absolute -top-6 left-1/2 -translate-x-1/2 backdrop-blur-3xl px-6 py-6 w-[80%] mx-auto rounded-3xl overflow-hidden">
//           <div className="absolute inset-0 bg-black opacity-10 backdrop-blur-md rounded-3xl"></div>

//           <div className="relative p-4 z-10">
//             <div className="flex justify-between items-center mb-12">
//               <div className="flex items-center justify-around gap-4">
//                 <div className="flex gap-10 overflow-x-auto scrollbar-hide">
//                   {states.map((state, idx) => (
//                     <button
//                       key={state}
//                       onClick={() => setActive(idx)}
//                       className={`relative flex items-center font-medium transition-colors ${
//                         active === idx
//                           ? "text-[#d80000]"
//                           : "text-gray-700 hover:text-gray-900"
//                       }`}
//                     >
//                       {state}
//                       {active === idx && (
//                         <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-6 bg-[#d80000] rounded-full"></span>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/*               
//               <h2 className="text-xl font-semibold text-black tracking-wide">
//                 {states[active]}
//               </h2> */}

//               <div className="flex items-center gap-2">
//                 <div
//                   className={`flex items-center bg-white rounded-full shadow-md overflow-hidden transition-all duration-500 
//                   ${
//                     searchOpen
//                       ? "max-w-xs px-4 opacity-100"
//                       : "max-w-0 px-0 opacity-0"
//                   }`}
//                 >
//                   <Search className="text-gray-500 mr-2 shrink-0" />
//                   <input
//                     type="text"
//                     placeholder="Search KRA services..."
//                     className={`flex-grow focus:outline-none text-gray-700 bg-transparent py-2 transition-opacity duration-500 ${
//                       searchOpen ? "opacity-100" : "opacity-0"
//                     }`}
//                   />
//                 </div>

//                 <button
//                   onClick={() => setSearchOpen((prev) => !prev)}
//                   className="p-2 rounded-full bg-white hover:bg-white/30 transition"
//                 >
//                   <Search className="w-5 h-5 text-black" />
//                 </button>
//               </div>
//             </div>

//             <div className="flex justify-around items-center text-black">
//               {stateContent[states[active]].map((item, idx) => {
//                 const Icon = item.icon;
//                 return (
//                   <div key={idx} className="flex flex-col items-center">
//                     <Icon className="h-10 w-10 mb-1 text-black" />
//                     <span className="text-sm text-black font-semibold">
//                       {item.name}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }

// export default FloatingNav


"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const FloatingNav = () => {
  const [active, setActive] = useState(0);
  const [menus, setMenus] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch(
          "https://kra-api.sokoflow.com/api/navigation-menus?populate=*"
        );
        const json = await res.json();

        // Only top-level menus (parent === null)
        const topLevel = json.data.filter((item) => item.parent === null);

        setMenus(topLevel);
        console.log("Fetched menus:", topLevel);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 backdrop-blur-3xl px-6 py-6 w-[80%] mx-auto rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 backdrop-blur-md rounded-3xl"></div>

        <div className="relative p-4 z-10">
          {/* --- Top navigation (tabs) --- */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center justify-around gap-4">
              <div className="flex gap-10 overflow-x-auto scrollbar-hide">
                {menus.map((menu, idx) => (
                  <button
                    key={menu.id}
                    onClick={() => setActive(idx)}
                    className={`relative flex items-center font-medium transition-colors ${
                      active === idx
                        ? "text-[#d80000]"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {menu.title}
                    {active === idx && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-6 bg-[#d80000] rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Box */}
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center bg-white rounded-full shadow-md overflow-hidden transition-all duration-500 
                  ${searchOpen ? "max-w-xs px-4 opacity-100" : "max-w-0 px-0 opacity-0"}
                `}
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

          {/* --- Sub-menu (children of active tab) --- */}
          <div className="flex justify-around items-center text-black flex-wrap gap-6">
            {menus[active]?.children?.length > 0 ? (
              menus[active].children.map((child) => (
                <a
                  key={child.id}
                  href={child.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  {/* Placeholder for icon (API doesn’t provide icons yet) */}
                  <div className="h-10 w-10 mb-1 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs text-black">🔗</span>
                  </div>
                  <span className="text-sm text-black font-semibold">
                    {child.title}
                  </span>
                </a>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No sub-menu available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingNav;

