"use client";

import { Curve } from "@/components";

export default function TermsOfService() {
  return (
    <Curve backgroundColor={"#f7f2e6"}>
      <div className="bg-[#f7f2e6] min-h-screen pt-32 pb-20 px-6 text-[#526855] font-['Gilda_Display']">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl text-center mb-8">Terms & Conditions</h1>
          
          <div className="flex flex-col gap-6 text-lg leading-relaxed">
            <p>Welcome to Slay With Strategy. By accessing our website, you agree to these terms. We build compelling social media presences that convert attention into unbreakable loyalty.</p>
            
            <div>
              <h4 className="text-2xl font-bold mb-3">1. Services Provided</h4>
              <p>Slay With Strategy provides digital marketing, social media management, and content creation services. We reserve the right to modify or discontinue services at our discretion without prior notice.</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-3">2. Intellectual Property</h4>
              <p>All content, strategies, designs, and materials provided by Slay With Strategy are the intellectual property of our company. Unauthorized use, reproduction, or distribution is strictly prohibited.</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-3">3. Limitation of Liability</h4>
              <p>Slay With Strategy shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-3">4. Governing Law</h4>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India. We reserve the right to modify these terms at any time. Continued use of our website constitutes your acceptance of any changes.</p>
            </div>
          </div>
        </div>
      </div>
    </Curve>
  );
}
