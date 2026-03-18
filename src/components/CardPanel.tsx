'use client'
import { useReducer } from "react";
import Card from "@/components/Card";

type RatingMap = Map<string, number>;
type RatingAction =
  | { type: 'update'; venueName: string; rating: number }
  | { type: 'remove'; venueName: string };

const venues = [
  { vid: "001", venueName: "The Bloom Pavilion", imgSrc: "/img/cover2.jpg" },
  { vid: "002", venueName: "Spark Space",        imgSrc: "/img/cover3.jpg" },
  { vid: "003", venueName: "The Grand Table",    imgSrc: "/img/cover4.jpg" },
];

function ratingReducer(state: RatingMap, action: RatingAction): RatingMap {
  switch (action.type) {
    case 'update': {
      const next = new Map(state);
      next.set(action.venueName, action.rating);
      return next;
    }
    case 'remove': {
      const next = new Map(state);
      next.delete(action.venueName);
      return next;
    }
    default:
      return state;
  }
}

const initialRatings: RatingMap = new Map(
  venues.map((v) => [v.venueName, 0])
);

export default function CardPanel() {
  const [ratingMap, dispatch] = useReducer(ratingReducer, initialRatings);

  function handleRatingChange(venueName: string, rating: number) {
    dispatch({ type: 'update', venueName, rating });
  }

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        {venues.map((v) => (
          <Card
            key={v.venueName}
            vid={v.vid}
            venueName={v.venueName}
            imgSrc={v.imgSrc}
            onRatingChange={handleRatingChange}
          />
        ))}
      </div>

      <div style={{ margin: "20px" }}>
        <div className="font-bold text-lg mb-2">
          Venue List with Ratings : {ratingMap.size}
        </div>
        {Array.from(ratingMap.entries()).map(([venue, rate]) => (
          <div
            key={venue}
            data-testid={venue}
            className="cursor-pointer hover:line-through hover:text-gray-400 mb-1"
            onClick={() => dispatch({ type: 'remove', venueName: venue })}
          >
            {venue} : {rate}
          </div>
        ))}
      </div>
    </div>
  );
}