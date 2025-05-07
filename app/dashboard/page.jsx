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
            
            <div className="p-100 pt-20 flex">
                <Alluser />
            </div>
        </div>
    )
}