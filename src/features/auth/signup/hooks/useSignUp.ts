import { useState } from "react";
import { SignUpType } from "../types/SignUpType";
import { SignUpClientServices } from "../services/signup.client";


export function useSignUp(){

    const [data, setData] = useState<Omit<SignUpType, "confirmPassword">| null>(null);

    async function signUp(data: Omit<SignUpType, "id" | "createdAt" | "confirmPassword">) : Promise<Omit<SignUpType, "confirmPassword">> {

        try {
            const res = await SignUpClientServices.signUp(data);    
            setData(res);
            return res;
        } catch (err) {
            throw err;
        }
        
    }

    return { signUp, data };

}
