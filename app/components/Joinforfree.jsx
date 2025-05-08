"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Premiumbutton from "./Premiumbutton";

export function Joinforfree() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="items-center">
      {!session ? (
        <>
          <Link href={"/0auth"}>
            <Premiumbutton />
          </Link>
        </>
      ) : (
        <>
          <Link href={"/dashboard"}>
            <div className="flex justify-center">
              <button className="AstraPro">
                <div className="wrapper ">
                  <span className="tracking-tighter ">View dashboard</span>
                  <div className="circle circle-12"></div>
                  <div className="circle circle-11"></div>
                  <div className="circle circle-10"></div>
                  <div className="circle circle-9"></div>
                  <div className="circle circle-8"></div>
                  <div className="circle circle-7"></div>
                  <div className="circle circle-6"></div>
                  <div className="circle circle-5"></div>
                  <div className="circle circle-4"></div>
                  <div className="circle circle-3"></div>
                  <div className="circle circle-2"></div>
                  <div className="circle circle-1"></div>
                </div>
              </button>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
