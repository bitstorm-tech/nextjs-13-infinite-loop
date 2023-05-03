"use client";

import AsyncServerComponent from "@/app/AsyncServerComponent";
import { useState } from "react";

export default function ClientComponent() {
  console.log("ClientComponent");
  const [foo, setFoo] = useState(1);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>{foo}</div>
      <button onClick={() => setFoo(Math.random())}>
        Start the infinite loop!
      </button>
      <AsyncServerComponent />
    </main>
  );
}
