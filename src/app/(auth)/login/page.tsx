import { AuthRequiredError } from "@/app/lib/exceptions";

interface Props {}

export default async function ComponentName({}: Props) {
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const json = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );

  await wait(5000);

  throw new AuthRequiredError(); 

  return <div>{JSON.stringify(json)}</div>;
}
