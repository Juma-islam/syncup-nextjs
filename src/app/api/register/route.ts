import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // এখানে অবশ্যই { prisma } ব্যবহার করবেন
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received Data:", body);

    const { name, email, password } = body;

    // ১. ডেটা চেক করা
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, Email এবং Password দিন" }, { status: 400 });
    }

    // ২. Prisma দিয়ে চেক করা
    const userExists = await prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      return NextResponse.json({ error: "এই ইমেইল দিয়ে অলরেডি অ্যাকাউন্ট আছে" }, { status: 400 });
    }

    // ৩. পাসওয়ার্ড হ্যাশ এবং ইউজার তৈরি
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword }
    });

    return NextResponse.json({ message: "Registration Successful", user }, { status: 201 });

  } catch (error: any) {
    console.error("SERVER_ERROR:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}