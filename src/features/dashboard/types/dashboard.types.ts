import { Reservation } from "@/generated/prisma";

export interface DashboardData {
  nextAppointment: Reservation | null;
  recentActivity: Reservation[];
}
