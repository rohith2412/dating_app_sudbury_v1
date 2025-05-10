"use client";

import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import Link from "next/link";

async function fetchAllUsers() {
  const res = await fetch("https://master.d6hyl9ll7latm.amplifyapp.com/api/user");
  const data = await res.json();
  return data;
}

export function Alluser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const allUsers = await fetchAllUsers();
      setUsers(allUsers);
      setLoading(false);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 180000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 w-70 lg:w-300 lg:grid-cols-3 lg:gap-6 gap-5 poppins">
      {users.map((item) => (
        <div className="lg:w-70" key={item._id}>
          <div className="bg-gray-950 p-5 rounded-2xl">
            <div className="flex items-center gap-5">
              <img src={item.image} className="w-12 h-12 rounded-full" />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h1>{item.name}</h1>
                  <Link href={`/users/${item._id}`}>
                    <div>
                      <img
                        src="/st1.png"
                        alt="logo"
                        className="w-7 h-7 hover:scale-110 transition-transform duration-200"
                      />
                      <span className="tooltip">Premium</span>
                    </div>
                  </Link>
                </div>
                <p className="text-xs opacity-60">{item.Education}</p>
              </div>
            </div>
            <div className="flex gap-5 pt-3">
              <h1>{item.gender}</h1>
              <h1>{item.Age}</h1>
              <h1>{item.Address}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
}
