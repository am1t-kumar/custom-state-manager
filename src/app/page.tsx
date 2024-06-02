"use client";
import Redux from "./state/state";

export default function Home() {
  const { useState } = Redux;
  const { getState, setState } = useState("Hello World!");
  return <>{getState()}</>;
}
