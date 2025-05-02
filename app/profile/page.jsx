"use client";

import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import { ProfileView } from "../components/Profileview";
import { Profileinput } from "../components/Profileinput";
import { Background } from "../components/Background";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="flex justify-center p-100">loading...</div>;
  }

  return (
    <div>
      <Background />
      <Navbar />
      
      <div className="grid justify-center mt-25">
        <ProfileView />
      </div>
    </div>
  );
}
