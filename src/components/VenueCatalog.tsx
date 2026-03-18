import { VenueItem, VenueJson } from "../interface";
import Card from "./Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  const venueData = await venuesJson;

  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center p-4">
      {venueData.data.map((venue: VenueItem) => (
        <Card
          key={venue.id}
          vid={venue.id}
          venueName={venue.name}
          imgSrc={venue.picture}
        />
      ))}
    </div>
  );
}