"use client";

import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import { Profileinput } from "../components/Profileinput";
import { useEffect } from "react";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="flex justify-center p-100">loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Profileinput />
    </div>
  );
}
