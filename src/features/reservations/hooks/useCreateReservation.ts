import { useState } from "react";
import { ReservationFormInput} from "../types/ReservationForm";
import { ReservationClientServices } from "../services/reservation.client";


export function useCreateReservation() {
  const [data, setData] = useState<any>(null);

  async function createReservation(input: ReservationFormInput) {

    const { location, contactNumber, theme, date, time } = input;
    
    if (!location || !contactNumber || !theme || !date || !time) {
      throw new Error("All fields are required");
    }

    try {
      const res = await ReservationClientServices.createReservation(input);
      setData(res);
      return res;
    } catch (err) {
      console.error("Failed to create reservation:", err);
      throw err;
    }
  }

  return { createReservation, data };
}
