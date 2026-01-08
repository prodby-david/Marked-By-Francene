import { api } from "@/shared/lib/axios";
import { ReservationFormInput } from "../types/ReservationForm";

export const ReservationClientServices = {
  async createReservation(data: ReservationFormInput) {
    const response = await api.post("/api/reservation", data);
    return response.data;
  },

  async getAllReservations() {
    const response = await api.get("/api/reservation");
    return response.data.reservations;
  },

  async getReservationById(id: string) {
    const response = await api.get(`/api/reservation/${id}`);
    return response.data.reservation;
  },

  async deleteReservation(id: string) {
    const response = await api.delete(`/api/reservation/${id}`);
    return response.data;
  }
};