"use client"
import Link from "next/link";
import { Alluser } from "../components/Alluser";
import Navbar from "../components/Navbar";
import { Background } from "../components/Background";

export default function Dashboard() {
    return(
        <div>
            <Background />
            <Navbar />
            <div className="poppins flex justify-center gap-30 ">
                <div className="border-none pt-2 pr-4 pl-4 pb-2 cursor-pointer hover:bg-blue-800 rounded-xl">Events</div>
                <Link href={"/dashboard"}>
                    <button className="border-none pt-2 pr-4 pl-4 pb-2 cursor-pointer hover:bg-blue-800 rounded-xl bg-blue-950">Explore</button>
                </Link>
                <div className="flex items-center border-none pt-2 pr-4 pl-4 pb-2 cursor-pointer hover:bg-blue-800 rounded-xl">
                    <svg className="pb-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e9d92b"><path d="M203-160v-60h554v60H203Zm-1-144-53-334q-5 2-9.5 2.5t-9.5.5q-21 0-35.5-14.5T80-685q0-21 14.5-36t35.5-15q21 0 36 15t15 36q0 8-2.5 16t-7.5 14l148 66 141-194q-14-6-22.5-18.5T429-830q0-21 15-35.5t36-14.5q21 0 36 14.5t15 35.5q0 16-8.5 28.5T500-783l141 194 148-66q-5-6-7.5-14t-2.5-16q0-21 15-36t35-15q21 0 36 15t15 36q0 21-15 35.5T829-635q-5 0-9-1t-9-3l-53 335H202Z"/></svg>                Dating
                 </div>
                 <div className="flex items-center border-none pt-2 pr-4 pl-4 pb-2 cursor-pointer hover:bg-blue-800 rounded-xl">
                    <svg className="pb-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e9d92b"><path d="M203-160v-60h554v60H203Zm-1-144-53-334q-5 2-9.5 2.5t-9.5.5q-21 0-35.5-14.5T80-685q0-21 14.5-36t35.5-15q21 0 36 15t15 36q0 8-2.5 16t-7.5 14l148 66 141-194q-14-6-22.5-18.5T429-830q0-21 15-35.5t36-14.5q21 0 36 14.5t15 35.5q0 16-8.5 28.5T500-783l141 194 148-66q-5-6-7.5-14t-2.5-16q0-21 15-36t35-15q21 0 36 15t15 36q0 21-15 35.5T829-635q-5 0-9-1t-9-3l-53 335H202Z"/></svg>                Messages
                 </div>
            </div>
            <div className="p-100 pt-20 flex">
                <Alluser />
            </div>
        </div>
    )
}