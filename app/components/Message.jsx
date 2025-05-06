"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

export function Message() {
  const [message, setMessage] = useState("");
  const { data: session } = useSession();
  const params = useParams();
  const recipientId = params.id;
  const senderId = session?.user?.id; 

  const handleSend = async () => {
    if (!message.trim()) return;
  
    try {
      const res = await fetch(`/api/message/${recipientId}`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId,
          content: message,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Message sent!");
        setMessage("");
      } else {
        alert(`Failed to send message: ${data.message}`);
      }
    } catch (err) {
      console.error("Send error:", err);
      alert("Something went wrong.");
    }
  };
  

  return (
    <div className="p-4 flex items-center gap-2">
      <input
        className="border border-gray-300 px-4 py-2 rounded w-full"
        placeholder="Send a text"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}
