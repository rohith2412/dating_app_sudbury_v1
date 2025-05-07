"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export function Joinforfree() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="items-center">
      {!session ? (
        <>
          <Link href="/0auth">
            <button className="font-bold cursor-pointer flex justify-center border-white border-2 p-3 rounded-4xl ">
              Join for free
            </button>
          </Link>
        </>
      ) : (
        <>
        <Link href="/dashboard">
            <button className="  cursor-pointer flex justify-center border-white border-2 p-3 rounded-4xl ">
              Dashboard
            </button>
          </Link>
         </>
      )}
    </div>
  );
}
