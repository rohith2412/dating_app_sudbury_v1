import Link from "next/link";
import { Background } from "../components/Background";
import Minibar from "../components/Minibar";

export default function Cookie_Policy() {
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
      <div className="max-w-3xl mx-auto p-6  shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Cookie Policy</h1>

      <p className="mb-4 text-sm">
        We use cookies and similar tracking technologies to enhance your
        experience, maintain your authentication session via NextAuth, and
        analyze site usage .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
      <p className="mb-4 text-sm">
        Cookies are small data files stored on your device. They remember your
        actions (like login status) and preferences (language, theme) over time.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Why We Use Cookies</h2>
      <ul className="list-disc list-inside mb-4 text-sm">
        <li>
          Authentication: Keeps you logged in with NextAuth session cookies.
        </li>
        <li>Preferences: Stores choices like display settings.</li>
        <li>
          Analytics: Measures traffic and usage patterns for improvements.
        </li>
        <li>Advertising: (If used) Delivers relevant ads based on behavior.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Types of Cookies</h2>
      <ul className="list-disc list-inside mb-4 text-sm">
        <li>Session Cookies: Temporary, deleted on browser close.</li>
        <li>Persistent Cookies: Remain for a set duration.</li>
        <li>First-Party Cookies: Set by our domain for core features.</li>
        <li>
          Third-Party Cookies: Set by external services (e.g., Google
          Analytics).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Managing Cookies</h2>
      <p className="mb-4 text-sm">
        You can disable or delete cookies via your browser settings. Doing so
        may limit functionality, including staying signed in and site
        personalization.
      </p>
    </div>
    </div>
  );
}
