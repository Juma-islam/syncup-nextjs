"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// অবশ্যই 'export default' ব্যবহার করতে হবে
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ইউজারের ডেটা ব্রাউজারে সেভ করা
        localStorage.setItem("user", JSON.stringify(data.user));
        
        alert(`স্বাগতম, ${data.user.name}!`);
        router.push("/"); // হোম পেজে নিয়ে যাবে
        router.refresh(); // Navbar আপডেট করার জন্য
      } else {
        alert(data.error || "লগইন ব্যর্থ হয়েছে");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("সার্ভারের সাথে যোগাযোগ করা যাচ্ছে না");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300">
        <form onSubmit={handleLogin} className="card-body gap-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-black text-primary">Login to SyncUp</h2>
            <p className="text-slate-500 text-sm">Welcome back! Please enter your details.</p>
          </div>

          <div className="form-control">
            <label className="label font-bold text-xs uppercase text-slate-500">Email Address</label>
            <input 
              type="email" 
              className="input input-bordered focus:input-primary"
              placeholder="example@mail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="form-control">
            <label className="label font-bold text-xs uppercase text-slate-500">Password</label>
            <input 
              type="password" 
              className="input input-bordered focus:input-primary"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <button 
            type="submit" 
            className={`btn btn-primary w-full mt-4 ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>

          <p className="text-center text-sm mt-2">
            Don't have an account? <Link href="/register" className="link link-primary font-bold">Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}