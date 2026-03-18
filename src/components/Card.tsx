'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Rating from "@mui/material/Rating";

export default function Card({
  vid,
  venueName,
  imgSrc,
  onRatingChange,
}: {
  vid: string;
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venueName: string, rating: number) => void;
}) {
  const [rating, setRating] = useState<number | null>(0);
  const showRating = onRatingChange !== undefined;

  return (
    <div className="w-50 h-80 rounded-lg shadow-md overflow-hidden cursor-pointer">
      <Link href={`/venue/${vid}`}>
        <div className="w-full h-[70%] relative rounded-t-lg overflow-hidden">
          <Image
            src={imgSrc}
            alt="venue image"
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="w-full p-2 text-black">{venueName}</div>
      </Link>

      {showRating && (
        <div
          className="px-2 pb-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Rating
            id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={(_, newValue) => {
              setRating(newValue);
              if (onRatingChange) onRatingChange(venueName, newValue ?? 0);
            }}
          />
        </div>
      )}
    </div>
  );
}