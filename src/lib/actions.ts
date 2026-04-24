"use server";

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
  // ১. ডেটা এক্সট্র্যাক্ট করা
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const priority = formData.get("priority")?.toString();

  // ২. বেসিক ভ্যালিডেশন
  if (!title) {
    throw new Error("Title is required");
  }

  try {
    // ৩. ডাটাবেসে সেভ করা
    await prisma.task.create({
      data: {
        title: title,
        description: description || "",
        priority: priority || "MEDIUM",
        isCompleted: false,
      },
    });

    // ৪. পেজ রিভ্যালিডেট করা যাতে নতুন ডেটা দেখা যায়
    revalidatePath("/tasks");
    
  } catch (error: any) {
    // এখানে এররটি টার্মিনালে সুন্দর করে দেখাবে
    console.error("CRITICAL DATABASE ERROR:", error.message);
    throw new Error("Could not save task to database.");
  }
}
// ==================
// src/lib/actions.ts এ নিচের ফাংশনটি যোগ করুন

export async function getTasks() {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: "desc", // নতুন টাস্কগুলো সবার আগে দেখাবে
      },
    });
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}
// ==============
export async function deleteTask(id: string) {
  try {
    await prisma.task.delete({
      where: { id },
    });
    revalidatePath("/tasks");
  } catch (error) {
    console.error("Delete Error:", error);
  }
}

export async function toggleTaskStatus(id: string, currentStatus: boolean) {
  try {
    await prisma.task.update({
      where: { id },
      data: { isCompleted: !currentStatus },
    });
    revalidatePath("/tasks");
  } catch (error) {
    console.error("Status Update Error:", error);
  }
}