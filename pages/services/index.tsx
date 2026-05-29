"use client";
import { useEffect } from "react";
import { Instagram, Linkedin, ChevronRight, Facebook } from "lucide-react";
import Link from "next/link";
import Expertise from "@/components/Expertise";
import { Clients } from "@/container";

const socialLinks = [
  { id: 1, title: "Instagram", href: " https://www.instagram.com/slaythestrategy.agency/", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: " https://www.linkedin.com/in/dipani-handa-a7460066/", icon: <Linkedin size={20} /> },
  { id: 3, title: "Facebook", href: "https://www.facebook.com/profile.php?id=61586631632667", icon: <Facebook size={20} /> },
];

export default function About() {

  useEffect(() => {
    // If you still want to manually initialize Locomotive Scroll
    // (though using LocomotiveScrollProvider is recommended)
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
       
      });
      // Optionally, you can destroy the instance when the component unmounts
      return () => {
        locomotiveScroll.destroy();
      };
    })();
  }, []);

  return (
    <>
      <section className="w-full bg-[#f7f2e6] py-32 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
        {/* Refined background elements with reduced opacity */}

        {/* Header Section - Added more vertical spacing */}
        <div className="text-center max-w-4xl mx-auto relative z-10 mb-40">
        <div className="mb-12">
          <span className="px-6 py-2 bg-[#f7f2e6] tracking-tight font-bold rounded-full text-sm text-[#526855] opacity-100 border border-gray-800 uppercase">
            Elevate Your Digital Presence
          </span>
        </div>

        <h1 className="font-['Gilda_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-12 tracking-tight leading-tight text-[#526855] opacity-100 text-center">
  Welcome to
  <span className="block sm:inline text-[#526855]"> Social Moodboard</span>
</h1>

          <p className="text-[#526855] opacity-100 text-2xl max-w-2xl mx-auto font-light leading-relaxed mt-6 font-['Gilda_Display']">
            We craft bespoke social media strategies, visual identities, optimization solutions, and forward-thinking digital strategies that elevate your brand&apos;s presence.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-[#f7f2e6] font-light rounded-full hover:shadow-lg hover:translate-y-px transition-all duration-300 flex items-center gap-2 font-['Gilda_Display']"
            >
              Start a Project <ChevronRight size={16} />
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 bg-[#526855] text-[#f7f2e6] opacity-100 font-light rounded-full hover:bg-gray-600 transition-all duration-300 border border-gray-800 shadow-sm font-['Gilda_Display']"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <Expertise />

        {/* Added Testimonial Section */}
        <div className="w-full relative z-10 mb-40">
          <Clients />
        </div>

        {/* Social Links Section - More elegant spacing */}
        <div className="pt-24 border-t border-gray-400 relative z-10">
          <h2 className="text-2xl font-normal mb-16 text-center font-['Gilda_Display'] text-[#526855] opacity-100">
            Connect With Us
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#526855] opacity-70 hover:text-red-400 font-light transition-all duration-300 gap-2"
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div>

      </div>
    </>
  );
}