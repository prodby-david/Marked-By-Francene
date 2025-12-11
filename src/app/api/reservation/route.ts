import { ReservationType } from "@/features/reservations/types/ReservationType";
import { ReservationServerServices } from "@/features/reservations/services/reservation.server";
import { NextResponse } from "next/server";


export async function POST(req: Request){

    try {
        const data : Omit<ReservationType, "id" | "createdAt"> = await req.json();

        if(!data.lastname || !data.firstname || !data.email || !data.theme){
            return NextResponse.json(
                { message: "Field must not be empty." },
                { status: 400 }
            )
        }

        const reservations: ReservationType = await ReservationServerServices.createReservation(data);

        return NextResponse.json(
            { message: "Reservation created successfully", reservations },
            { status: 201 }
        )

    } catch (err: any) {
        return NextResponse.json(
            { message: "Internal Server Error", error: err.message },
            { status: 500 }
        )
    }

}