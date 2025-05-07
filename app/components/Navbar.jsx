"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Minibar from "./Minibar";

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  
  return (
    <div className="m-3">
      <Minibar />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
      </style>
      
      <div className="flex justify-between items-center ">
        <Link href={"/"}>
        <div className=" pl-5 flex gap-2 items-center   lg:pl-15  lg:pt-4  lg:flex lg:items-center lg:gap-4">
          <img
            src="/st1.png"
            alt="logo"
            className="transform scale-x-[-1] w-10 h-10  "
          />
          <h2 className="lilita-one-regular text-2xl lg:text-xl">ASTRA</h2>
        </div>
        </Link>

        <div>
          <section>
            {!session ? (
              <>
                <div className="     lg:pr-15  lg:mt-4 flex w-full justify-end   ">
                  <div className="join border-0 flex scale-100 rounded-xl pl-3 pr-3  lg:justify-center lg:rounded-4xl   lg:pr-4 lg:pl-4">
                    <Link href="/0auth">
                      <button className="lilita-one-regular h-10 lg:h-12 cursor-pointer font-bold text-gray-800 tracking-tight">
                        Join Now
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between ">
                  <style jsx global>{`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
                    .poppins {
                      font-family: "Poppins", sans-serif;
                      font-weight: 400;
                      font-style: normal;
                    }
                  `}</style>

                  <div className="flex p-2">
                    <div className="p-3">
                      <div className="flex pt-2 ">
                        

                        <Link href="/profile">
                        <div className="flex gap-2  justify-center items-center lg:gap-4 hover:opacity-45">
                          <img  className=" w-7 h-7 lg:w-8 lg:h-8 rounded-full " src={session.user.image} alt={name}  />

                          <div className="poppins ">{session.user.name}</div>
                        </div>
                        </Link>

                        <button
                          className="pl-5 cursor-pointer"
                          onClick={() => signOut({callbackUrl: "/"})}
                        >
                          
                          <img
                            className="hover:opacity-45"
                            src="logout.png"
                            alt="Logo"
                            width="20"
                            height="20"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
