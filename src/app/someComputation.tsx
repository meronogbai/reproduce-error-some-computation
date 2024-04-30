'use client';

import { useState } from "react"

export function someComputation() {
  // expensive logic that generates a component

  return function Test() {
    const [state] = useState(4);
    return <p>test: {state}</p>
  }
}
