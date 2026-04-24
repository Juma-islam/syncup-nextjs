"use client";

import { toggleTaskStatus } from "@/lib/actions";

export default function TaskCheckbox({ id, isCompleted }: { id: string, isCompleted: boolean }) {
  return (
    <input 
      type="checkbox" 
      checked={isCompleted}
      onChange={async () => {
        await toggleTaskStatus(id, isCompleted);
      }}
      className="checkbox checkbox-primary checkbox-md" 
    />
  );
}