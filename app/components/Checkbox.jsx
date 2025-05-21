"use client";

import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ControlledCheckbox() {
  const { data: session } = useSession();
  const router = useRouter();

  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async () => {
    if (!session) return;

    setLoading(true);

    try {
      const profileUpdate = {
        email: session.user.email,
        checked: true, // ✅ make sure this is true
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT_URL}/api/user`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileUpdate),
      });

      if (res.ok) {
        router.push("/dashboard"); 
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "Must be 18 or above" }}
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
        <p>Must be 18 years or above?</p>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!checked || loading}
        className={`bg-pink-800 text-white px-4 py-2 rounded-xl hover:bg-pink-900 transition ${
          !checked || loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Submitting..." : "Continue"}
      </button>
    </div>
  );
}
