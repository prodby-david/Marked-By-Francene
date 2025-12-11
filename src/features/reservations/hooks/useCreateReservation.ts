import { useState } from "react";
import { ReservationType } from "../types/ReservationType";
import { ReservationClientServices } from "../services/reservation.client";


export function useCreateReservation(){
    const [ data, setData ] = useState<any>(null);

    async function createReservation(data: Omit<ReservationType, "id" | "createdAt">){

        try {
            const res = await ReservationClientServices.createReservation(data);
            setData(res);
            return res;
        } catch (err) {
            throw err;
        }
        
    }

    return { createReservation, data };

}