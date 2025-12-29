import { ReservationFormInput } from "../types/ReservationForm";
import { ReservationRepository } from "../repos/reservation";

export const ReservationServerServices = {
  async createReservation(userId: string, input: ReservationFormInput) {
    const dateTime = new Date(`${input.date}T${input.time}`);
    return ReservationRepository.createUserReservation({
      userId,
      location: input.location,
      contactNumber: input.contactNumber,
      theme: input.theme,
      dateTime,
      notes: input.notes ?? null
    });
  },

  async getAllReservations() {
    return ReservationRepository.getAllReservation();
  },

  async getReservationById(id: string) {
    return ReservationRepository.getUserReservation(id);
  }
};
