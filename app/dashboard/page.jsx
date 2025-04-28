"use client"
import Link from "next/link";
import { Alluser } from "../components/Alluser";
import Navbar from "../components/Navbar";

export default function Dashboard() {
    return(
        <div>
            <Navbar />
            <div className="poppins flex justify-center gap-30 ">
                <div className="border-none pt-2 pr-4 pl-4 pb-2 cursor-pointer hover:bg-blue-800 rounded-xl">Events</div>
                <Link href={"/dashboard"}>
                    <button className="border-none pt-2 pr-4 pl-4 pb-2 cursor-pointer hover:bg-blue-800 rounded-xl bg-blue-950">Explore</button>
                </Link>
                <div className="border-none pt-2 pr-4 pl-4 pb-2 cursor-pointer hover:bg-blue-800 rounded-xl">Messages</div>
            </div>
            <div className="p-100 pt-20 flex">
                <Alluser />
            </div>
        </div>
    )
}