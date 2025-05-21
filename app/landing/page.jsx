"use client"

import { Background } from "../components/Background";
import Heading from "../components/Heading";
import { Joinforfree } from "../components/Joinforfree";
import Minibar from "../components/Minibar";
import  Navbar  from "../components/Navbar";
import { UserPolicy } from "../components/UserPolicies";

export default function Landing() {
  return (
    
    <div>
      
      <Background />
      <Minibar />
      <Navbar />
      <Heading />
      <div className="flex justify-center lg:p-10 p-20">
        <Joinforfree />
      </div>
      <UserPolicy />
    </div>
  );
}
