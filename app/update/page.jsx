"use client";

import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import { Profileinput } from "../components/Profileinput";

export default function Update() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="flex justify-center p-100">loading...</div>;
  }

  return (
    <div>
      <Navbar />
      
      <div className="grid justify-center mt-25">
        <Profileinput />
      </div>
    </div>
  );
}
