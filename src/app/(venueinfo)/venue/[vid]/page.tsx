import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueData = await getVenue(vid);
  const venue = venueData.data;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-center mb-6">{venue.name}</h1>
      <div className="flex flex-row items-center gap-6 border rounded-xl p-6 max-w-2xl mx-auto">
        <div className="relative w-48 h-48 rounded-xl overflow-hidden shrink-0">
          <Image
            src={venue.picture}
            alt={venue.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-gray-800 space-y-1">
          <p>Name: {venue.name}</p>
          <p>Address: {venue.address}</p>
          <p>District: {venue.district}</p>
          <p>Postal Code: {venue.postalcode}</p>
          <p>Tel: {venue.tel}</p>
          <p>Daily Rate: {venue.dailyrate}</p>
        </div>
      </div>
    </main>
  );
}