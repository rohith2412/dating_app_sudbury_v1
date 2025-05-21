
import Analytics from "./components/Analytics";
import CookieConsentBanner from "./components/CookieConsentBanner";
import Landing from "./landing/page";

export default function Home() {
  return (
    <div>
      
      <Landing />
      <CookieConsentBanner />
      <Analytics />

    </div>
  );
}
