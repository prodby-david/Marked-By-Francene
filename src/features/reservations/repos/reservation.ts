import { prisma } from "@/shared/lib/prisma";
import { ReservationType } from "../index";


export const ReservationRepository = {

    async createUserReservation(data: Omit<ReservationType, "id" | "createdAt">){
        return await prisma.reservation.create({data});
    },

    async getUserReservation(id: string){
        return await prisma.reservation.findUnique({
            where: { id }
        })
    },

    async getAllReservation(): Promise<ReservationType[]>{
        const reservation = await prisma.reservation.findMany();
        return reservation;
    }
    
}