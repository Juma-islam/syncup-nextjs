import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SyncUp - Modern Task Manager",
  description: "Manage your tasks with style and efficiency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* Navbar সবার উপরে থাকবে */}
          <Navbar />
          
          {/* পেজের কন্টেন্ট মাঝখানে থাকবে */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Footer সবার নিচে থাকবে */}
          <Footer />
        </div>
      </body>
    </html>
  );
}