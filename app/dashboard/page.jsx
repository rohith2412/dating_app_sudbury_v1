"use client";

import { Alluser } from "../components/Alluser";
import Navbar from "../components/Navbar";
import { Background } from "../components/Background";
import Minibar from "../components/Minibar";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <Background />
      <Minibar />
      <Navbar />
      <div className="flex justify-center p-2 gap-35 poppins">
        <button className="underline ">Home</button>
        <Link href={"Suggestion"}>
        <button className="hover:underline">Random</button>
        </Link>
      </div>
      <div className="pt-15 grid justify-center lg:flex lg:p-100 lg:pt-20 ">
        <Alluser />
      </div>
    </div>
  );
}