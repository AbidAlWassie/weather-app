'use server';

import prisma from '@/lib/db';
import { revalidatePath } from "next/cache";

export async function addRegion(regionName: string, userEmail: string) {
  try {
    // Debugging: Log the received data
    console.log('Received regionName:', regionName);
    console.log('Received userEmail:', userEmail);

    // Ensure the user exists
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      console.error('User not found for email:', userEmail);
      throw new Error('User not found');
    }

    // Ensure the region exists or create it if not
    let region = await prisma.region.findUnique({
      where: { name: regionName },
    });

    if (!region) {
      region = await prisma.region.create({
        data: {
          name: regionName,
        },
      });
    }

    // Create the association between the user and the region
    await prisma.userRegion.create({
      data: {
        userId: user.id,
        regionId: region.id,
      },
    });

    console.log('Region added successfully for user:', user.email);
    revalidatePath('/region');
    
  } catch (error) {
    console.error('Error adding region:', error);
    throw error;
  }
}
