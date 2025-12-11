import { prisma } from "@/shared/lib/prisma";
import { ReservationType } from "../index";
import { ReservationRepository } from "../repos/reservation";



export const ReservationServerServices = {

    async createReservation(data: Omit<ReservationType, "id" | "createdAt">): Promise<ReservationType> {
        return await ReservationRepository.createUserReservation(data)
    },

    async getAllReservations(): Promise<ReservationType[]> {
        return await ReservationRepository.getAllReservation();
    },

    async getReservationById(id: string): Promise<ReservationType | null> {
        return await ReservationRepository.getUserReservation(id);
    
    }

}