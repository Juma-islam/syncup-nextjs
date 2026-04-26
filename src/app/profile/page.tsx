"use client";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  if (!user) return <div className="p-10 text-center font-bold">Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-2xl rounded-3xl border border-base-200">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-4xl font-black mb-4">
          {user.name[0].toUpperCase()}
        </div>
        <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>
        <p className="text-slate-500 mb-6">{user.email}</p>
        
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-base-200 p-4 rounded-2xl text-center">
            <p className="text-xs uppercase font-bold text-slate-500">Status</p>
            <p className="text-primary font-bold text-lg">Active</p>
          </div>
          <div className="bg-base-200 p-4 rounded-2xl text-center">
            <p className="text-xs uppercase font-bold text-slate-500">Role</p>
            <p className="text-primary font-bold text-lg">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}