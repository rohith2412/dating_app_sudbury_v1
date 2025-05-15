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
      <div className="flex justify-center p-2 gap-35 poppins">
        <Link href={"dashboard"}>
        <button className="hover:underline ">Home</button>
        </Link>
        <button className="underline">Random</button>
       
      </div>
      <SuggestedUser />
    </div>
  );
}
