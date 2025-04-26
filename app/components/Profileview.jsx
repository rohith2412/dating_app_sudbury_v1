"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function ProfileView() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      console.log("🧠 User from session:", session.user);
    }
  }, [session]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>You are not signed in</p>;

  const {
    name,
    email,
    image,
    PhoneNumber,
    Address,
    College,
    Education,
    gender,
    Age,
  } = session.user;

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Welcome, {name}</h2>
      <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />

      <ul className="space-y-1 text-gray-700">
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Phone Number:</strong> {PhoneNumber || "N/A"}</li>
        <li><strong>Address:</strong> {Address || "N/A"}</li>
        <li><strong>College:</strong> {College || "N/A"}</li>
        <li><strong>Education:</strong> {Education || "N/A"}</li>
        <li><strong>Gender:</strong> {gender || "N/A"}</li>
        <li><strong>Age:</strong> {Age || "N/A"}</li>
      </ul>
    </div>
  );
}
