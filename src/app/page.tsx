import { SomeComputation } from "./someComputation";

export default async function Home() {
  // const TheComponent = someComputation();
  return (
    <div>
      <h1>result:</h1>
      <SomeComputation />
    </div>
  );
}
