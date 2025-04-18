"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="m-3">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
      </style>

      <div className="flex justify-between ">
        <div className="pl-15  pt-4  flex items-center gap-4">
          <img
            src="/st1.png"
            alt="logo"
            className="transform scale-x-[-1] w-10 h-10  "
          />
          <h2 className="lilita-one-regular text-xl">ASTRA</h2>
        </div>

        <div>
          <section>
            {!session ? (
              <>
                <div className="pr-15  mt-4 flex w-full justify-end   ">
                  <div className="join  border-0 flex  justify-center rounded-4xl   pr-4 pl-4">
                    <Link href="/0auth">
                      <button className="lilita-one-regular h-12 cursor-pointer font-bold text-gray-800 tracking-tight">
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
                        <div className="Poppins">{session.user.name}</div>
                        </Link>

                        <button
                          className="pl-5 cursor-pointer"
                          onClick={() => signOut({callbackUrl: "/"})}
                        >
                          {" "}
                          <img
                            className=""
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
