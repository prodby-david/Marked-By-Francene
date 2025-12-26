import { SignUpRepository } from "../repo/signup.repo";
import { hashPassword } from "@/shared/lib/hashpassword";



export const SignUpServices = { 

    async createUser(data: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
    }){
        const hashedPassword = await hashPassword(data.password);
        return await SignUpRepository.create({...data, password: hashedPassword});
    }

}