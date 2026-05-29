"use client";
import { useEffect, useRef, useState } from "react";
import { Curve } from "@/components";

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
      return () => {
        locomotiveScroll.destroy();
      };
    })();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div data-scroll-container ref={containerRef}>
      <Curve backgroundColor={"#f7f2e6"}>
        {/* ── Main contact section ── */}
        <section className="h-screen w-full bg-[#f7f2e6] flex flex-col items-center justify-center px-4 pt-16 pb-8">
          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-normal text-[#516856] font-['Gilda_Display'] leading-tight tracking-tight">
              Let&apos;s <span className="text-[#516856]">talk.</span>
            </h1>
            <p className="mt-4 text-[#516856]/65 text-sm md:text-base font-['Gilda_Display'] max-w-sm mx-auto leading-relaxed">
              Tell us about your project, and we&apos;ll help define the right
              direction with a thoughtful and structured approach.
            </p>
          </div>

          {/* Form card */}
          <div
            className="w-full max-w-md rounded-2xl p-6 bg-[#f7f2e6]"
            style={{
              border: "1.5px solid #c9b96a",
              boxShadow: "0 2px 24px rgba(81,104,86,0.07)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-2xl text-[#516856] font-['Gilda_Display']">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] placeholder-[#516856]/35 text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] placeholder-[#516856]/35 text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] placeholder-[#516856]/35 text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    rows={3}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] placeholder-[#516856]/35 text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#1a1a1a] text-[#f7f2e6] text-sm font-medium font-['Gilda_Display'] hover:bg-[#333] transition-colors duration-200 mt-1"
                >
                  Submit
                </button>

                {/* Quick chat link */}
                <p className="text-center text-xs text-[#516856]/60 font-['Gilda_Display']">
                  Prefer quick chat?{" "}
                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#516856] underline underline-offset-2 hover:text-[#516856] transition-colors"
                  >
                    Book a Call
                  </a>
                </p>
              </form>
            )}
          </div>
        </section>
      </Curve>
    </div>
  );
}
