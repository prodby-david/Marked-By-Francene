import { prisma } from "@/shared/lib/prisma";

type CreateReservationInput = {
  userId: string;
  location: string;
  contactNumber: string;
  theme: string;
  dateTime: Date;
  notes: string | null;
};

export const ReservationRepository = {
  async createUserReservation(data: CreateReservationInput) {
    return prisma.reservation.create({
      data: {
        location: data.location,
        contactNumber: data.contactNumber,
        theme: data.theme,
        dateTime: data.dateTime,
        notes: data.notes ?? null,
        user: { connect: { id: data.userId } } 
      },
      include: {
        user: {
          select: { id: true, firstname: true, lastname: true, email: true }
        }
      }
    });
  },

  async getUserReservation(id: string) {
    return prisma.reservation.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, firstname: true, lastname: true, email: true } }
      }
    });
  },

  async getAllReservation() {
    return prisma.reservation.findMany({
      include: {
        user: { select: { id: true, firstname: true, lastname: true, email: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
  }
};
