import { ReservationFormInput } from "@/features/reservations/types/ReservationForm";
import { ReservationServerServices } from "@/features/reservations/services/reservation.server";
import { NextResponse } from "next/server";
import { redis } from "@/shared/lib/redis";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";


export async function POST(req: Request) {

const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const data: ReservationFormInput = await req.json();

    if (!data.location || !data.contactNumber || !data.theme || !data.date || !data.time) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const userId = session.user.id;

    const reservation = await ReservationServerServices.createReservation(userId, data);
    
    await redis.del("reservations");

    return NextResponse.json(
      { 
        message: "Reservation created successfully", 
        reservation 
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const cache = await redis.get("reservations");

    if (cache) {
      return NextResponse.json(
        { message: "Reservations fetched successfully", reservations: cache },
        { status: 200 }
      );
    }

    const reservations = await ReservationServerServices.getAllReservations();

    await redis.set("reservations", JSON.stringify(reservations), { ex: 60 });

    return NextResponse.json(
      { message: "Reservations fetched successfully", reservations },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: err.message },
      { status: 500 }
    );
  }
}