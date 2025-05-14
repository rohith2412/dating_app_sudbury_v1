"use client";

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
    return <div>No matched users found.</div>;
  }

  return (
    <div className="p-4 space-y-4 grid justify-center poppins ">
      <h2 className="text-2xl font-bold mb-4"></h2>
      {suggestions.map((pair, index) => (
        <div key={index} className="w-100">
          <div className="flex justify-between bg-gray-950 p-5 rounded-2xl">
            <div>
              <div className="flex gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={pair.user1.image}
                ></img>
                <div>
                  <p className=""> {pair.user1.name}</p>
                  <p className="text-xs opacity-60"> {pair.user1.Education}</p>
                </div>
              </div>
              <div className="flex gap-3 pt-3">
                <p> {pair.user1.age}</p>
                <p> {pair.user1.gender}</p>
                <p> {pair.user1.Address}</p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-4 ">
                <img
                  className="rounded-full w-12 h-12"
                  src={pair.user2.image}
                ></img>
                <div>
                  <p> {pair.user2.name}</p>
                  <p className="text-xs opacity-60"> {pair.user2.Education}</p>
                </div>
              </div>
              <div className="flex gap-3 pt-3">
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
