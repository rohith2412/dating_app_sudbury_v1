"use client";

import { Background } from "@/app/components/Background";
import Navbar from "@/app/components/Navbar";
import { useSession } from "next-auth/react";
import { useState, useEffect, use } from "react";

async function getUser(id) {
  const res = await fetch(`http://localhost:3000/api/profile/${id}`);
  if (!res.ok) {
    throw new Error("User not found");
  }
  return res.json();
}

export default function UserPage({ params }) {
  const { id } = use(params);  

  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(id);
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!user) {
    return <div className="p-10 text-center">User not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <Background />
      <div className="pt-13 pl-4">
        <div className="flex justify-start pl-10 gap-7 font-mono">
          <div className="rounded-2xl">
            <img
              className="rounded-2xl scale-100"
              src={user.image}
              alt="User"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="flex items-center">
              {user.gender === "Male" ? (
                <>
                  <span>Male</span>
                  <span className="text-blue-500 text-2xl ml-2">♂️</span>
                </>
              ) : user.gender === "Female" ? (
                <>
                  <span>Female</span>
                  <span className="text-pink-500 text-xl ml-2">♀️</span>
                </>
              ) : (
                <span>{user.gender}</span>
              )}
            </p>
          </div>
        </div>

        <div className="pt-5 pl-5 font-mono font-bold">
          <div className="grid p-5 w-fit opacity-80 gap-1">
            <p>📍 {user.Address}</p>
            <p>{user.Age} years old</p>
            <p>{user.Education} student</p>
            <p>@ {user.College}</p>
            <p>{user.Status}</p>
          </div>
        </div>

        <div className="pl-10 pt-5">
          <a
            href={user.InstagramURL}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl shadow-lg transition"
          >
            Let’s Date 💌
          </a>
        </div>
      </div>
    </div>
  );
}