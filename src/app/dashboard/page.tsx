import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function ProtectedPage() {
  
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <h1>Access Denied</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
    </div>
  );
}
