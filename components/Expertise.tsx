"use client";

import { useState } from "react";
import Image from "next/image";
import { Layers, Palette, Tag, Globe } from "lucide-react";

const services = [
  {
    id: "social-media",
    name: "Social Media",
    title: "Social Media Strategy.",
    description:
      "We craft bespoke social media strategies that connect with your audience through carefully curated visuals and purposeful messaging.",
    tags: ["Content Creation", "Community Management", "Brand Voice", "Campaign Planning", "+more"],
    image: "/social.webp",
    icon: Layers,
  },
  {
    id: "growth",
    name: "Growth",
    title: "Brand Growth.",
    description:
      "We design and execute growth strategies that transform your brand's digital presence, turning followers into loyal customers.",
    tags: ["Audience Growth", "Engagement Strategy", "Analytics", "Paid Ads", "+more"],
    image: "/growth.webp",
    icon: Palette,
  },
  {
    id: "strategy",
    name: "Strategy",
    title: "Digital Strategy.",
    description:
      "We build forward-thinking digital strategies that elevate your brand and drive measurable results across every touchpoint.",
    tags: ["Brand Positioning", "Market Research", "Competitor Analysis", "Roadmapping", "+more"],
    image: "/strategy.webp",
    icon: Tag,
  },
  {
    id: "identity",
    name: "Visual Identity",
    title: "Visual Identity.",
    description:
      "We create visual identities that define and elevate brands, ensuring they resonate with their audience through intentional design.",
    tags: ["Logo Design", "Brand Guidelines", "Typography", "Color Systems", "+more"],
    image: "/second.webp",
    icon: Globe,
  },
];

export default function Expertise() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeTab)!;

  return (
    <section className="py-20 px-4 md:px-8 max-w-[1100px] mx-auto">

      {/* ── Header (matches reference image) ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
        {/* Left: badge + big heading */}
        <div className="flex flex-col gap-4 max-w-[560px]">
          <div className="inline-flex">
            <span className="px-3 py-1 text-xs font-medium text-[#f7f2e6] border border-[#f7f2e6]/30 rounded-full font-['Gilda_Display']">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.1] tracking-tight text-[#f7f2e6] font-['Gilda_Display']">
            Strategies shaped by{" "}
            <span className="text-[#f7f2e6]">clarity and intent.</span>
          </h2>
        </div>

        {/* Right: description */}
        <p className="text-[#f7f2e6]/60 text-base leading-relaxed font-['Gilda_Display'] max-w-[340px] md:text-right md:self-end">
          We offer focused services crafted with a structured approach, clear thinking, and attention to detail at every stage.
        </p>
      </div>

      {/* ── Main Card ── */}
      <div
        className="bg-[#516856] border border-[#f7f2e6]/15 rounded-[32px] overflow-hidden flex"
        style={{ height: "640px", boxShadow: "0 4px 40px rgba(247,242,230,0.10)" }}
      >
        {/* Left Sidebar */}
        <div
          className="w-[240px] flex-shrink-0 flex flex-col justify-between p-5"
          style={{ background: "rgba(247,242,230,0.06)" }}
        >
          {/* Nav Items */}
          <div className="flex flex-col gap-1">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-left transition-all duration-200 ${
                    isActive
                      ? "bg-[#516856] text-[#f7f2e6] shadow-sm"
                      : "text-[#f7f2e6]/50 hover:bg-[#516856]/50 hover:text-[#f7f2e6]/80"
                  }`}
                >
                  <Icon
                    size={16}
                    className={`flex-shrink-0 ${isActive ? "text-[#f7f2e6]" : "text-[#f7f2e6]/40"}`}
                  />
                  <span
                    className={`text-[16px] font-['Gilda_Display'] ${
                      isActive ? "font-semibold text-[#f7f2e6]" : "font-normal text-[#f7f2e6]"
                    }`}
                  >
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom icon grid */}
          <div className="mt-auto pt-6 flex flex-wrap gap-2">
            {["SM", "GR", "ST", "VI", "BR", "MK", "CO", "+5"].map((label, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-xl bg-[#516856] border border-[#f7f2e6]/15 flex items-center justify-center shadow-sm"
              >
                <span className="text-[10px] font-medium text-[#f7f2e6]/70 font-['Gilda_Display']">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col p-8 gap-5 overflow-hidden">
          {/* Title + Description + Tags */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <h3 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-[#f7f2e6] font-['Gilda_Display']">
              {activeService.title}
            </h3>
            <p className="text-[#f7f2e6]/65 text-base leading-relaxed font-['Gilda_Display'] max-w-xl">
              {activeService.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {activeService.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium text-[#f7f2e6]/80 border border-[#f7f2e6]/25 bg-transparent font-['Gilda_Display']"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image — fills remaining height */}
          <div className="flex-1 relative rounded-2xl overflow-hidden">
            <Image
              key={activeService.id}
              src={activeService.image}
              alt={activeService.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
