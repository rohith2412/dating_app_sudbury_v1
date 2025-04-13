"use client"

import {signIn } from "next-auth/react"

export default function Auth() {
    return(
        <div>
            <h2>signin with google</h2>
            <button onClick={() => signIn('google')}>sign in</button>
        </div>
    )
}