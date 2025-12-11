import { NextResponse} from "next/server";  
import { SignUpType } from "@/features/auth/signup/types/SignUpType";
import { SignUpServices } from "@/features/auth/signup/services/signup.server";


export async function POST(req: Request) {
    try {

        const data: Omit<SignUpType, "id" | "createdAt" | "confirmPassword"> = await req.json();

        if (!data.firstname || !data.lastname || !data.email || !data.password) {
            return NextResponse.json(
                { message: "Field must not be empty." },
                { status: 400 }
            )
        }

        const user: Omit<SignUpType, "confirmPassword"> = await SignUpServices.createUser(data);

        return NextResponse.json(
            { message: "User created successfully", user },
            { status: 201 }
        )
        
    } catch (err) {
        return NextResponse.json(
            { message: "Internal Server Error", error: (err as Error).message },
            { status: 500 }
        )    
    }
    
}
