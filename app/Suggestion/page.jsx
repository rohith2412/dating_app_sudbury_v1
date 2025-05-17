"use client";
import Link from "next/link";
import { Background } from "../components/Background";
import Minibar from "../components/Minibar";
import Navbar from "../components/Navbar";
import SuggestedUser from "../components/SuggestedUser ";

export default function Suggestion() {
  return (
    <div>
      <Minibar />
      <Background />
      <Navbar />
      <div className="flex justify-center p-2 lg:gap-35 gap-10 poppins">
        <Link href={"dashboard"}>
          <button className="hover:underline ">Home</button>
        </Link>
        <button className="underline">Random</button>
      </div>
      <div className="pt-2 lg:pt-15">
        <SuggestedUser />
      </div>
    </div>
  );
}
