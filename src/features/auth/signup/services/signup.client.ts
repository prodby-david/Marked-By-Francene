import { publicApi } from "@/shared/lib/axios";
import { SignUpType } from "../index";


export const SignUpClientServices = {

    async signUp(data: Omit<SignUpType, "id" | "createdAt" | "confirmPassword">): Promise<Omit<SignUpType, "confirmPassword">> {
        const response = await publicApi.post<Omit<SignUpType, "confirmPassword">>("/api/signup", data);
        return response.data;
    }

}