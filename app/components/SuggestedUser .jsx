"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuggestionUser() {
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_PORT_URL}/api/suggestion`
        );
        if (!res.ok) throw new Error("Failed to fetch suggestions");
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getSuggestions();
  }, []);

  if (error) return <div>Error: {error}</div>;

  if (suggestions.length === 0) {
    return <div className="flex justify-center ">Loading....</div>;
  }

  return (
    <div className="p-4  text-sm space-y-4  grid justify-center poppins">
      <p className="text-sm opacity-60 flex justify-center">*This list refreshes every week</p>

      {suggestions.map((pair, index) => (
        <div key={index} className="w-90 ">
          <div className="flex justify-between  bg-gray-950 p-5 rounded-2xl">
            <div className="grid justify-start">
              <div className="flex gap-4">
                <img
                  className="rounded-full w-10 h-10"
                  src={pair.user1.image}
                ></img>
                <div>
                  <p className=""> {pair.user1.name.split(" ")[0]}</p>
                  <div className="flex items-center ">
                    <p className="text-xs opacity-60">
                      {" "}
                      {pair.user1.Education}
                    </p>
                    <div className="flex justify-end">
                      <a
                        href={pair.user1.InstagramURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="scale-60"
                          src="instagram.png"
                          alt="Instagram"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-3">
                <p> {pair.user1.age}</p>
                <p> {pair.user1.gender}</p>
                <p> {pair.user1.Address}</p>
              </div>
            </div>
            {/* <div><img className="" src="/st1.png"></img></div> */}
            <div className="grid ">
              <div className="flex gap-4 justify-end">
                <img
                  className="rounded-full w-10 h-10 "
                  src={pair.user2.image}
                ></img>
                <div>
                  <p className="flex "> {pair.user2.name.split(" ")[0]}</p>
                  <div className="flex items-center justify-end">
                    <p className="text-xs  opacity-60">
                      {" "}
                      {pair.user2.Education}
                    </p>

                    <div className="flex justify-end">
                      <a
                        href={pair.user2.InstagramURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="scale-60"
                          src="instagram.png"
                          alt="Instagram"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-3 justify-end">
                <p> {pair.user2.age}</p>
                <p> {pair.user2.gender}</p>
                <p> {pair.user2.Address}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
