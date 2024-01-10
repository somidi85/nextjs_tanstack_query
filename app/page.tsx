import ToDos from "@/components/ToDos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        My ToDos
      </h1>
      <ToDos />
    </main>
  );
}
