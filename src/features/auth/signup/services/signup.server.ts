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
      const name = `${data.firstname} ${data.lastname}`.trim();

      return await SignUpRepository.create({
        email: data.email,
        password: hashedPassword,
        name
      });
    }

}