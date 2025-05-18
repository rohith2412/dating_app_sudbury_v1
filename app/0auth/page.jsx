"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Background } from "../components/Background";
import Link from "next/link";

export default function Auth() {
  const { data: session, status } = useSession();
  console.log(session);

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.push("/dashboard");
  });

  return (
    <div className="bg-gray-950 mr-170 rounded-4xl mt-50 ml-170 m-20">
      <Link href="/">
      <div className=" flex justify-center pt-3 pl-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="35px"
          fill="#FFFFFF"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
      </Link>
      <div className="flex justify-center ">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
        </style>
        <Background />

        <div className="gird justify-center ">
          <div className="  gird justify-center gap-2 items-center   lg:items-center lg:gap-4">
            <div className="flex justify-center">
              <img
                src="/st1.png"
                alt="logo"
                className="transform scale-x-[-1] w-11 h-11  "
              />
            </div>

            <div>
              <h2 className="lilita-one-regular flex justify-center pt-5 text-2xl lg:text-4xl">
                Get Started
              </h2>
            </div>
          </div>
          <div className="text-center text-sm pt-5">
            By tapping Log In or Continue, you agree to our <br />{" "}
            <span className="underline text-blue-700">Terms</span> . Learn how
            we process your data in our <br />{" "}
            <span className="underline text-blue-700">Privacy Policy</span>, and{" "}
            <span className="underline text-blue-700">Cookie Policy</span>.
          </div>
          <div className="scale-80 flex justify-center pb-10 pt-4">
            <button
              onClick={() => signIn("google")}
              className="cursor-pointer text-black scale-120 flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all ease-in duration-200"
            >
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
              >
                <path
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  fill="#FFC107"
                ></path>
                <path
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  fill="#FF3D00"
                ></path>
                <path
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  fill="#4CAF50"
                ></path>
                <path
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  fill="#1976D2"
                ></path>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
