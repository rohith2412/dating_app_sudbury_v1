"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export function ProfileView() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      console.log(session.user);
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
    InstagramURL
  } = session.user;

  return (
    <div>
        <h2 className="text-2xl font-bold flex  justify-center">Welcome, {name}</h2>  
        <p className="text-sm pt-2 opacity-50">*Note: You must fille in with data to make your account public*</p>

      <div className="lg:pt-10 pt-10 ">
        <div className="flex gap-5 items-center"> 
            <div className="flex pl-1 ">Profile picture: </div>
            <img src={image} alt={name} className="w-14 h-14 rounded-full mb-4" />
        </div>

        <ul>
            <li className="flex pl-1 justify-start gap-10 pt-4"><div>Email:</div> {email}</li>
            <li className="flex pl-1 justify-start gap-10 pt-4"><div>Phone Number:</div> {PhoneNumber || "N/A"}</li>
            <li className="flex pl-1 justify-start gap-10 pt-4"><div>Age:</div> {Age || "N/A"}</li>
            <li className="flex pl-1 justify-start gap-10 pt-4"><div>Gender:</div> {gender || "N/A"}</li>
            <li className="flex pl-1 justify-start gap-10 pt-4"><div>Address:</div> {Address || "N/A"}</li>
            <li className="flex pl-1 justify-start gap-10 pt-4"><div>College:</div> {College || "N/A"}</li>
            <li className="flex pl-1 justify-start gap-10 pt-4"><div>Education:</div> {Education || "N/A"}</li>
            
            <li className="flex pl-1 w-70 justify-start gap-10 pt-4"><div className="flex">Instagram URL: {InstagramURL || "N/A"}</div></li>


        </ul>
        <div className="flex justify-center pt-8">
        <Link href={"/update"}>
            <button className="flex justify-center cursor-pointer text-black p-2 font-bold text-sm border-2 rounded-2xl bg-white">
                Edit profile
            </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
