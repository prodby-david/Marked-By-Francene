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
        userId: data.userId,
        location: data.location,
        contactNumber: data.contactNumber,
        theme: data.theme,
        dateTime: data.dateTime,
        notes: data.notes,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });
  },

  async getUserReservation(id: string) {
    return prisma.reservation.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });
  },

  async getAllReservation() {
    return prisma.reservation.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  },

  async deleteReservation(id: string) {
    return prisma.reservation.delete({
      where: { id }
    });
  }
};