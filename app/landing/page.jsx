"use client"

import { Background } from "../components/Background";
import Heading from "../components/Heading";
import { Joinforfree } from "../components/Joinforfree";
import Minibar from "../components/Minibar";
import  Navbar  from "../components/Navbar";
import Premiumbutton from "../components/Premiumbutton";

export default function Landing() {
  return (
    <div>
      <Background />
      <Minibar />
      <Navbar />
      <Heading />
      <div className="flex justify-center p-20 gap-3">
        <Joinforfree />
        <Premiumbutton />
      </div>
    </div>
  );
}
