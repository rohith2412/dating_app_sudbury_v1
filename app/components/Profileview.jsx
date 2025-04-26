"use client"

import { useSession } from "next-auth/react"

export function ProfileView() {
    const {data: session, status} = useSession();
     
    return(
        <div>
            <section>
                {!session ? (
                    <>
                    
                    </>
                ) : (
                    <div>hello</div>
                )}
            </section>
        </div>
    )
}