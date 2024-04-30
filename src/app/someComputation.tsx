"use client";

import { useState } from "react";

export function SomeComputation() {
  // expensive logic that generates a component

  const TheComp = function Test() {
    const [state] = useState(4);
    return <p>test: {state}</p>;
  };
  return <TheComp />;
}
