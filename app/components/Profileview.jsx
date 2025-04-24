"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function ProfileView() {
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState(null);

  // Fetch profile when the session is available
  useEffect(() => {
    if (status === "authenticated") {
      fetch("http://localhost:3000/api/user")
        .then((res) => res.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error("Failed to fetch profile:", error));
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") return <div>Please log in to see your profile.</div>;

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      {profile ? (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Address:</strong> {profile.address}</p>
        </div>
      ) : (
        <div>Loading profile data...</div>
      )}
    </div>
  );
}
