"use client";

import { Curve } from "@/components";

export default function PrivacyPolicy() {
  return (
    <Curve backgroundColor={"#f7f2e6"}>
      <div className="bg-[#f7f2e6] min-h-screen pt-32 pb-20 px-6 text-[#526855] font-['Gilda_Display']">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl text-center mb-8">Privacy Policy</h1>
          
          <div className="flex flex-col gap-6 text-lg leading-relaxed">
            <p>At Slay With Strategy, we value your privacy. We collect information to provide better services, build compelling social media presences, and communicate with you effectively.</p>
            
            <div>
              <h4 className="text-2xl font-bold mb-3">1. Information Collection</h4>
              <p>The personal information you provide, such as your name, email, and phone number, is solely used to help ambitious brands cut through the noise. We collect data when you interact with our website, fill out forms, or engage with our services.</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-3">2. Use of Information</h4>
              <p>We combine data-backed marketing strategies with scroll-stopping creative content. Your information helps us personalize your experience, improve our website, and send periodic emails regarding your order or other products and services.</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-3">3. Data Protection</h4>
              <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons.</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-3">4. User Rights</h4>
              <p>You have the right to request access to, correction, or deletion of your personal data. We do not share your personal information with third parties without your consent, except as required by law. For any inquiries, contact dipani@slaywithstrategy.com.</p>
            </div>
          </div>
        </div>
      </div>
    </Curve>
  );
}
