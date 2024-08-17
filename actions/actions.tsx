"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addRegion(formData: FormData) {
  const region = formData.get('region') as string;
  await prisma.region.create({
    data: {
      name: region
    }
  });

  revalidatePath('/region');
}