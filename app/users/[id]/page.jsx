import { Background } from "@/app/components/Background";
import Navbar from "@/app/components/Navbar";
import { Request } from "@/app/components/Request";
import { notFound } from "next/navigation";

async function getUser(id) {
  const res = await fetch(`http://localhost:3000/api/profile/${id}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function UserPage({ params }) {
  const { id } = params;
  const user = await getUser(id);

  return (
    <div>
      <div>
        <Navbar />
        <Background />
      </div>
      <div className="pt-13 pl-4 ">
        <div className="flex justify-start pl-10 gap-7 font-mono">
          <div className="flex justify-start  rounded-2xl">
            <img className="rounded-2xl scale-100" src={user.image}></img>
          </div>
          <div className="">
            <h1>{user.name}</h1>

            <p className="flex items-center">
              {user.gender === "Male" ? (
                <>
                  <span>Male</span>
                  <span className="text-blue-500 flex items-center  text-2xl">
                    ♂️
                  </span>
                </>
              ) : user.gender === "Female" ? (
                <>
                  <span>Female</span>
                  <span className="text-pink-500 text-lg">♀️</span>
                </>
              ) : (
                <span>{user.gender}</span>
              )}
            </p>
          </div>
        </div>
        <div className="pt-5 flex justify-start pl-5 font-mono font-bold">
          <div className="grid justify-center p-5  w-fit  opacity-80 gap-1  text-">
            <p>{"📍 " + user.Address}</p>
            <p>{user.Age + " years old"}</p>
            <p>{user.Education + " student, "}</p>
            <p>{"@ " + user.College}</p>
            <p>{user.Status}</p>
          </div>
        </div>
      </div>
      <div>
        <Request />
      </div>
    </div>
  );
}
