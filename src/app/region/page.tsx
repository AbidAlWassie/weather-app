import { authOptions } from '@/auth/authOptions';
import AddRegion from "@/components/ui/AddRegion";
import prisma from "@/lib/db";
import { getServerSession } from 'next-auth/next';

export default async function Region() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    return <p>Please log in to add and view regions.</p>;
  }

  const userEmail = session.user.email;

  // Fetch the regions associated with the logged-in user
  const userRegions = await prisma.userRegion.findMany({
    where: {
      user: {
        email: userEmail,
      },
    },
    include: {
      region: true, // Include the Region data for each userRegion entry
    },
  });

  return (
    <div>
      <h1>Your Regions</h1>

      <ul>
        {userRegions.map(({ region }) => (
          <li key={region.id}>{region.name}</li>
        ))}
      </ul>

      <AddRegion userEmail={userEmail} />
    </div>
  );
}
