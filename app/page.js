import Heading from "./components/Heading";
import Minibar from "./components/Minibar";
import { Navbar } from "./components/Navbar";
import Premiumbutton from "./components/Premiumbutton";

export default function Home() {
  return (
    <div>
      <Minibar />
      <Navbar />
      <Heading />
      <Premiumbutton />
    </div>
  );
}
