import { api } from "@/shared/lib/axios";
import { ReservationType } from "../types/ReservationType";


export const ReservationClientServices = {

    async createReservation(data: Omit<ReservationType, "id" | "createdAt">): Promise<ReservationType> {
        const response = await api.post<ReservationType>("/reservation", data);
        return response.data;
    },

    async getAllReservations(): Promise<ReservationType[]> {
        const response = await api.get("/reservation");
        return response.data.reservations;
    }
    
}