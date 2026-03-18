'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const covers = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="relative w-full h-125 cursor-pointer"
      onClick={() => setIndex((prev) => (prev + 1) % covers.length)}>
      <Image src={covers[index]} alt="banner" fill className="object-cover" priority />
      {session && (
        <div className="absolute top-4 right-6 bg-white/80 text-gray-800 font-semibold px-4 py-2 rounded-lg shadow z-10">
          Welcome {session.user.name}
        </div>
      )}
      <button
        className="absolute bottom-6 right-6 bg-white text-gray-800 font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-100 z-10"
        onClick={(e) => { e.stopPropagation(); router.push("/venue"); }}>
        Select Venue
      </button>
    </div>
  );
}