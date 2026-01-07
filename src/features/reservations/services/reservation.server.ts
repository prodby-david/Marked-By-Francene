import { ReservationRepository } from "../repos/reservation";
import { ReservationFormInput } from "../types/ReservationForm";
import { convertTo24Hour } from "../utils/convertTime";


export const ReservationServerServices = {
  async createReservation(userId: string, input: ReservationFormInput) {

    const timeString = convertTo24Hour(input.time);

    const dateTime = new Date(`${input.date}T${timeString}`);

    return ReservationRepository.createUserReservation({
      userId,
      location: input.location,
      contactNumber: input.contactNumber,
      theme: input.theme,
      dateTime,
      notes: input.notes?.trim() ?? null
    });
  },

  async getAllReservations() {
    return ReservationRepository.getAllReservation();
  },

  async getReservationById(id: string) {
    return ReservationRepository.getUserReservation(id);
  },
};
