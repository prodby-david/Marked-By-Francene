import { api } from "@/shared/lib/axios";
import { ReservationFormInput } from "../types/ReservationForm";

export const ReservationClientServices = {
  async createReservation(data: ReservationFormInput) {
    const response = await api.post("/api/reserve", data);
    return response.data;
  },

  async getAllReservations() {
    const response = await api.get("/api/reserve");
    return response.data.reservations;
  },

  async getReservationById(id: string) {
    const response = await api.get(`/api/reserve/${id}`);
    return response.data.reservation;
  },

  async deleteReservation(id: string) {
    const response = await api.delete(`/api/reserve/${id}`);
    return response.data;
  }
};