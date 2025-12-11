import { SignUpRepository } from "../repository/repository";

export const SignUpServices = { 

    async createUser(data: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
    }){
        return await SignUpRepository.create(data);
    }

}