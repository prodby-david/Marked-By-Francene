import { api } from "@/shared/lib/axios";
import { ReservationFormInput } from "../types/ReservationForm";

export const ReservationClientServices = {

    async createReservation( data: ReservationFormInput ) {
        const response = await api.post<ReservationFormInput>("/api/reservation", data);
        return response.data;
    },

    async getAllReservations(): Promise<ReservationFormInput[]> {
        const response = await api.get("/api/reservation");
        return response.data.reservations;
    }
    
}