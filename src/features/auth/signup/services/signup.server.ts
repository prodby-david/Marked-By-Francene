import { SignUpRepository } from "../repo/signup.repo";
import bcrypt from 'bcryptjs'



export const SignUpServices = { 

    async createUser(data: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
    }){
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        return await SignUpRepository.create(data);
    }

}