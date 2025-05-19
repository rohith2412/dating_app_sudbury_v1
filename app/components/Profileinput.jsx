"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Profileinput() {
  const {data: session, status} = useSession();
  const router = useRouter();

  const[PhoneNumber, setPhoneNumber] = useState("");
  const[Address, setAddress] = useState("");
  const[College, setCollege] = useState("");
  const[Status, setStatus] = useState("");
  const[Education, setEducation]  = useState("");
  const[gender, setgender] = useState("");
  const[Age, setAge] = useState("");
  const[InstagramURL, setInstagramURL] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) return; 
  
    const profileUpdate = {
      email: session.user.email,
      PhoneNumber,
      Address,
      College,
      Status,
      Education,
      gender,
      Age,
      InstagramURL
    };
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_PORT_URL}/api/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileUpdate)
    });
  
    const data = await res.json();
  
    if (res.ok) {
      router.push("/profile")
    } 
  };
  



  return (
    <div>
      <section>
      {!session ? (
        <>
        {" "}
        </>
      ) : (
        <div className="form">
          <h2 className="text-2xl font-bold flex justify-center">Edit Your Profile</h2>
          <p className="text-sm pt-2 opacity-50">*Note: You must fille in with data to make your account public*</p>

          <form className="pt-10" onSubmit={handleSubmit} >
            <div className="input flex justify-between">{session.user.name}<svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" viewBox="0 -960 960 960" width="24px" fill="#AAAA"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 
            23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 
            56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 
            33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg></div>
            
            <div className="input flex justify-between">{session.user.email}
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" viewBox="0 -960 960 960" width="24px" fill="#AAAA"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33
             23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 
             56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 
             33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
              </div>
            </div>

            <input value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="input appearance-none
             [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
             placeholder="PhoneNumber"  type="number" />

            <select required value={Address} onChange={(e) => setAddress(e.target.value)} className="input">
              <option className="bg-black" value="">Location</option>
              <option className="bg-black" value="Sudbury">Sudbury</option>
              <option className="bg-black" value="Toronto">Toronto</option>
              <option className="bg-black" value="Scharbrough">Scharbrough</option>
              <option className="bg-black" value="Mississauga">Mississauga</option>
              <option className="bg-black" value="Ottawa">Ottawa</option>
              <option className="bg-black" value="Montreal">Montreal</option>
              <option className="bg-black" value="North Bay">North Bay</option>
              <option className="bg-black" value="Barrie">Barrie</option>
            </select>

            <input required value={College} onChange={(e) => setCollege(e.target.value)} className="input" placeholder="College"  type="text"/>

            <select required value={Education} onChange={(e) => setEducation(e.target.value)} className="input">
              <option className="bg-black" value="">Field </option>
              <option className="bg-black" value="Developer">Engineering</option>
              <option className="bg-black" value="Medical">Medical</option>
              <option className="bg-black" value="Science">Science</option>
              <option className="bg-black" value="Arts">Arts</option>
              <option className="bg-black" value="Finance">Finance</option>
              <option className="bg-black" value="Business">Business</option>
            </select>


            <select required value={gender} onChange={(e) => setgender(e.target.value)} className="input">
              <option className="bg-black" value="">Select Gender</option>
              <option className="bg-black" value="Male">Male</option>
              <option className="bg-black" value="Female">Female</option>
            </select>
            
            <select required value={Status} onChange={(e) => setStatus(e.target.value)} className="input">
              <option className="bg-black" value="">Status</option>
              <option className="bg-black" value="Single">Single</option>
              <option className="bg-black" value="Commited">Commited</option>
            </select>


            <input required value={InstagramURL} onChange={(e) => setInstagramURL(e.target.value)} className="input" placeholder="Instagram URL"  type="text"/>


            <input required value={Age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Age" 
            className="input appearance-none [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"/>

            <div className="flex justify-center pt-7">
              <button className="font-bold flex justify-center text-black p-2 text-sm border-2 rounded-2xl cursor-pointer bg-white"  type="submit">Update Profile</button>
            </div>
          </form>
    </div>
      )}
      </section>
    </div>
  );
}
