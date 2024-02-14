import CardFront from "@/app/components/CardFront";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-sans text-sm lg:flex">
        <CardFront />
      </div>
    </main>
  );
}
