import { prisma } from "@/shared/lib/prisma";
import { DashboardData } from "../types/dashboard.types";

export async function getDashboardData(
  userId: string,
  now: Date
): Promise<DashboardData> {
  const reservations = await prisma.reservation.findMany({
    where: { userId },
    orderBy: { dateTime: "asc" },
  });

  const normalized = reservations.map(r => ({
    ...r,
    dateTime: new Date(r.dateTime),
  }));

  return {
    nextAppointment:
      normalized.find(r => r.dateTime > now) ?? null,

    recentActivity: normalized
      .filter(r => r.dateTime <= now)
      .slice(-5)
      .reverse(),
  };
}
