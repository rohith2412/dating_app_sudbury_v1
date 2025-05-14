"use client"
import Link from "next/link";
import { Alluser } from "../components/Alluser";
import Navbar from "../components/Navbar";
import { Background } from "../components/Background";
import Minibar from "../components/Minibar";
import { Matchuser } from "../components/Matcheusers";

export default function Dashboard() {
    return(
        <div>
            <Background />
            <Minibar />
            <Navbar />
            
            <div className="pt-15 grid justify-center lg:flex lg:p-100 lg:pt-20 ">
                <Alluser />
            </div>
            <Matchuser />
        </div>
    )
}