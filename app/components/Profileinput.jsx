"use client"

import { useSession } from "next-auth/react";

export function Profileinput() {
  const {data: session} = useSession();
  return (
    <div>
      <section>
      {!session ? (
        <>
        {" "}
        </>
      ) : (
        <div className="form">
      <form>
        <div className="input flex justify-between">{session.user.name}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#AAAA"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg></div>
        <div className="input flex justify-between">{session.user.email}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#AAAA"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg></div>
        <input className="input appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]" placeholder="Phone number" required="" type="number" />
        <input className="input" placeholder="Address" required="" type="text"/>
        <input className="input" placeholder="College" required="" type="text"/>
        <input className="input" placeholder="Education" required="" type="text"/>
        <input className="input" placeholder="gender" required="" type="text"/>
        <input type="number" placeholder="Age" required className="input appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"/>
        <button type="submit">Update profile</button>
      </form>
    </div>
      )}
      </section>
    </div>
  );
}
