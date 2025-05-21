import Link from "next/link";
import { Background } from "../components/Background";
import Minibar from "../components/Minibar";

export default function Privacy_Policy() {
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
        <div className="max-w-3xl mx-auto p-6 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Effective Date: 21-05-2025
      </p>

      <p className="mb-4 text-sm">
        Astra is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website [Your Website URL].
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4 text-sm">
        We may collect personal information that you voluntarily provide to us when you:
      </p>
      <ul className="text-sm list-disc list-inside mb-4">
        <li>Register on the website</li>
        <li>Subscribe to a newsletter</li>
        <li>Fill out a form</li>
        <li>Contact us directly</li>
      </ul>
      <p className="mb-4 text-sm">
        The personal information we collect may include:
      </p>
      <ul className="text-sm list-disc list-inside mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Mailing address</li>
        <li>Profile image</li>
        <li>Gender</li>
        <li>Age</li>
        <li>Educational background</li>
        <li>College affiliation</li>
        <li>Instagram URL</li>
        <li>Consent status (e.g., agreement to terms)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4 text-sm">
        We use the information we collect to:
      </p>
      <ul className="text-sm list-disc list-inside mb-4">
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, either directly or through one of our partners</li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4 text-sm">
        We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:
      </p>
      <ul className="list-disc list-inside mb-4 text-sm">
        <li>Service Providers: We may share your information with third-party vendors who perform services on our behalf.</li>
        <li>Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies and Tracking Technologies</h2>
      <p className="mb-4 text-sm">
        We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
      </p>
      <p className="mb-4 text-sm">
        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 ">5. Data Security</h2>
      <p className="mb-4 text-sm">
        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4 text-sm">
        Under PIPEDA, you have the right to:
      </p>
      <ul className="list-disc list-inside mb-4 text-sm">
        <li>Access your personal information</li>
        <li>Request correction of any inaccuracies</li>
        <li>Withdraw consent to the use of your personal information</li>
      </ul>
      <p className="mb-4">
        To exercise these rights, please contact us at [Your Contact Email].
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Third-Party Links</h2>
      <p className="mb-4 text-sm">
        Our website may contain links to other websites. We are not responsible for the privacy practices of other sites and encourage you to read their privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Privacy Policy</h2>
      <p className="mb-4 text-sm">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-4 text-sm">
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc list-inside mb-4 text-sm">
        <p>Email: <a href="mailto:rohithra75@gmail.com">rohithra75@gmail.com</a></p>
        <p>Phone: +1 (249) 979-3475</p>
      </ul>

      

     
    </div>
    </div>
  );
}
