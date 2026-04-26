"use client";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (res.ok) alert("Registration Successful! Now Login.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50">
      <div className="card w-96 bg-base-100 shadow-xl border border-slate-200">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
          <input 
            type="text" placeholder="Full Name" className="input input-bordered w-full mb-3"
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
          <input 
            type="email" placeholder="Email Address" className="input input-bordered w-full mb-3"
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
          />
          <input 
            type="password" placeholder="Password" className="input input-bordered w-full mb-3"
            onChange={(e) => setFormData({...formData, password: e.target.value})} 
          />
          <button className="btn btn-primary w-full">Sign Up</button>
          <p className="text-center text-sm mt-4 text-slate-500">Already have an account? <a href="/login" className="text-primary font-bold">Login</a></p>
        </form>
      </div>
    </div>
  );
}