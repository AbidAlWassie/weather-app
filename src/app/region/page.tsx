import AddRegion from "@/components/ui/AddRegion";
import prisma from "@/lib/db";

export default async function Region() {
  const regions = await prisma.region.findMany();

  return (
    <div>
      Region

      <ul>
        {regions.map((region) => (
          <li key={region.id}>{region.name}</li>
        ))}
      </ul>

      <AddRegion />

    </div>
  )
}
