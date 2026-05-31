import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <p className="font-bold text-4xl md:text-8xl text-emerald-800">you</p>
        <p className="font-bold text-3xl md:text-5xl">in 4 letters</p>
      </div>
      <Link href="/test" className="text-center flex items-center justify-center w-24 h-12 md:w-32 md:h-12 my-4 hover:bg-emerald-600 bg-emerald-800 text-white transition-all duration-400 border border-gray-300 rounded-3xl text-sm">
        Let's Go
      </Link>
    </div>
  );
}
