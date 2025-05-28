import Analytics from "./components/Analytics";
import CookieConsentBanner from "./components/CookieConsentBanner";
import Landing from "./landing/page";

export const metadata = {
  title: "Malayali Dating App in Sudbury | Astra",
  description:
    "Join Astra - the exclusive Malayali dating community in Sudbury. Connect, chat, and find your perfect partner today!",
  keywords: [
    "Malayali dating",
    "Sudbury dating",
    "Astra app",
    "Malayali singles",
    "Malayali community Sudbury",
  ],
  alternates: {
    canonical: "https://dating-app-sudbury-v1.vercel.app/",
  },
};


export default function Home() {
  return (
    <div>
      
        <Landing />
        <CookieConsentBanner />
        <Analytics />

    </div>
  );
}
