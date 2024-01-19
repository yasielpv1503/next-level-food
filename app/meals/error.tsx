"use client"
export default function Error({error}:any) {
  return (
    <main className="error" >
      <h1>An error accurred!</h1>
      <p>{error?.message}</p>
    </main>
  );
}
