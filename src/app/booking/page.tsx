import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "./BookingForm";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  let profile = null;

  if (session?.user?.token) {
    try {
      const result = await getUserProfile(session.user.token);
      profile = result.data;
    } catch (e) {
      profile = null;
    }
  }

  return (
    <main className="w-full flex flex-col items-center space-y-4 mt-10">
      {profile && (
        <div className="w-fit bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-1 text-sm text-gray-700">
          <div><span className="font-semibold">Name:</span> {profile.name}</div>
          <div><span className="font-semibold">Email:</span> {profile.email}</div>
          <div><span className="font-semibold">Tel.:</span> {profile.tel}</div>
          <div><span className="font-semibold">Member Since:</span> {profile.createdAt}</div>
        </div>
      )}
      <BookingForm />
    </main>
  );
}