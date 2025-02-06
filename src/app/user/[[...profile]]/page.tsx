"use client"
import { useEffect, useState } from "react";
import { UserProfile, useUser } from "@clerk/nextjs";
export default function Profile() {
  const { isSignedIn } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isSignedIn) {
      setLoading(false);
    }
  }, [isSignedIn]);

  if (loading) return <p>Loading...</p>;

  if (!isSignedIn) return <p>Please sign in first</p>;

  return (
    <div className="place-items-center my-4">
   <UserProfile/>
   </div>
  );
}
