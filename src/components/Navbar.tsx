"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="bg-slate-950 border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-lg font-black shadow-lg shadow-indigo-500/20">
            S
          </span>
          <div>
            <p className="text-xl font-black">SyncUp</p>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Task manager</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <Link href="/tasks" className="transition hover:text-white">Tasks</Link>
          <Link href="/login" className="transition hover:text-white">Login</Link>
          <Link href="/register" className="transition hover:text-white">Sign Up</Link>
          <Link href="/profile" className="transition hover:text-white">Profile</Link>
          <Link href="#features" className="transition hover:text-white">Features</Link>
          <Link href="#contact" className="transition hover:text-white">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-4 border-l border-slate-800 pl-4 text-slate-300">
            <Link href="/register" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
              Start free trial
            </Link>
            <Link href="/tasks" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
              Open app
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}