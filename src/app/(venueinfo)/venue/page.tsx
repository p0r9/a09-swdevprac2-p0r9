import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default function VenuePage() {
  const venuesJson = getVenues();
  return (
    <main>
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold">Select your venue</h1>
        <p className="text-gray-500">Explore 3 fabulous venues in our venue catalog</p>
      </div>
      <VenueCatalog venuesJson={venuesJson} />
    </main>
  )
}