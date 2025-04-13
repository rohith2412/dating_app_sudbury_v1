"use client"

import {signIn, signOut, useSession } from "next-auth/react"

export default function Auth() {
    const { data: session} = useSession()
    console.log(session)
    return(
        <div>
            <h2>signin with google</h2>
            <button onClick={() => signIn('google')}>sign in</button>
            <button onClick={() => signOut()}>sign out</button>
        </div>
    )
}