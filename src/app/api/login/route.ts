import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // ১. ফিল্ড চেক করা
    if (!email || !password) {
      return NextResponse.json({ error: "ইমেইল এবং পাসওয়ার্ড দিন" }, { status: 400 });
    }

    // ২. ইউজার খোঁজা
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return NextResponse.json({ error: "এই ইমেইলে কোনো অ্যাকাউন্ট পাওয়া যায়নি" }, { status: 404 });
    }

    // ৩. পাসওয়ার্ড যাচাই করা
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "ভুল পাসওয়ার্ড, আবার চেষ্টা করুন" }, { status: 401 });
    }

    // ৪. সফল হলে ইউজারের তথ্য পাঠানো
    return NextResponse.json({
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
        id: user.id
      }
    }, { status: 200 });

  } catch (error: any) {
    console.error("LOGIN_ERROR:", error);
    return NextResponse.json({ error: "সার্ভারে সমস্যা হচ্ছে" }, { status: 500 });
  }
}