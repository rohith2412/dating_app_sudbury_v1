"use client";
import Link from "next/link";
import { Background } from "../components/Background";
import Minibar from "../components/Minibar";

export default function Terms() {
  return (
    <div>
      <Background />
      <Minibar />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
      </style>
      <div className="flex justify-center pt-3">
        <Link href={"/"}>
          <div className=" pl-5 flex gap-2 items-center   lg:pl-15  lg:pt-4  lg:flex lg:items-center lg:gap-4">
            <img
              src="/st1.png"
              alt="logo"
              className="transform scale-x-[-1] w-10 h-10  "
            />
            <h2 className="lilita-one-regular text-2xl lg:text-xl">ASTRA</h2>
          </div>
        </Link>
      </div>
      <div>
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto'  }}>
      <h1 className="text-2xl font-bold">Terms of Service</h1>
      <div className="text-sm">
        <p className="pt-10">Effective Date: 21-05-2025</p>
      <p>Last Updated: 21-05-2025</p>
      </div>

      <section>
        <h2 className="pt-5 text-xl">1. Introduction</h2>
        <p className="text-sm">
          Welcome to Astra. This App is designed to connect individuals within the Malayali community in Sudbury, Ontario, for social and dating purposes. By accessing or using our App, you agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use our services.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">2. Eligibility</h2>
        <p className="text-sm">
          You must be at least 18 years old to use the App. By creating an account, you confirm that you are 18 years of age or older. This confirmation is stored in our database to ensure compliance with age-related legal requirements.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">3. Account Registration</h2>
        <p className="text-sm">
          To access certain features of the App, you must create an account. You agree to:
        </p>
        <ul className="text-sm">
          <li>- Provide accurate, current, and complete information during registration.</li>
          <li>- Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
          <li>- Notify us immediately of any unauthorized use of your account.</li>
        </ul>
      </section>

      <section>
        <h2 className="pt-5 text-xl">4. Community Focus</h2>
        <p className="text-sm">
          Our App is specifically designed for members of the Malayali community residing in Sudbury, Ontario. By using the App, you acknowledge and agree that the platform is intended to serve this specific community.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">5. User Conduct</h2>
        <p className="text-sm">
          You agree not to use the App to:
        </p>
        <ul className="text-sm">
          <li>- Violate any applicable laws or regulations.</li>
          <li>- Harass, abuse, or harm another person.</li>
          <li>- Impersonate any person or entity.</li>
          <li>- Post or transmit any content that is unlawful, defamatory, obscene, or otherwise objectionable.</li>
          <li>- Engage in any fraudulent activities.</li>
        </ul>
      </section>

      <section>
        <h2 className="pt-5 text-xl">6. Content</h2>
        <p className="text-sm">
          You are solely responsible for the content you post on the App. You grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any content that you post on or in connection with the App.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">7. Privacy</h2>
        <p className="text-sm">
          Your use of the App is also governed by our <a href="privacy-policy" className="underline ">Privacy Policy</a>. Please review our Privacy Policy to understand how we collect, use, and protect your information.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">8. Termination</h2>
        <p className="text-sm">
          We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or the App.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">9. Disclaimers</h2>
        <p className="text-sm">
          The App is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted or error-free.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">10. Limitation of Liability</h2>
        <p className="text-sm">
          To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">11. Governing Law</h2>
        <p className="text-sm">
          These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law principles.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">12. Changes to Terms</h2>
        <p className="text-sm">
          We may modify these Terms at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the App after such changes constitutes your acceptance of the new Terms.
        </p>
      </section>

      <section>
        <h2 className="pt-5 text-xl">13. Contact Information</h2>
        <p className="text-sm">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>Email: <a href="mailto:rohithra75@gmail.com">rohithra75@gmail.com</a></p>
        <p>Phone: +1 (249) 979-3475</p>
      </section>
    </div>
  
      </div>
    </div>
  );
}
