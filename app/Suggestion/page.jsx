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
          <button className="hover:underline cursor-pointer ">Home</button>
        </Link>
        <button className="underline cursor-pointer">dateLinker</button>
      </div>
      
      <div className="pt-2 lg:pt-9">
        <SuggestedUser />
      </div>
    </div>
  );
}
