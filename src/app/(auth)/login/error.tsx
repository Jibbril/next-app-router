'use client'

interface Props {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: Props) {
  return (
    <div>
    <p>lol nope</p>
    <p>{error.message}</p>
    <button onClick={reset}>try again</button>
    </div>
  );
}