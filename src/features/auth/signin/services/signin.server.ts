import { getUserByEmail } from "../repo/signin.repo";
import { hashPassword, comparePassword } from "@/shared/lib/hashpassword";


export async function validateUser(email: string, password: string){

    const user = await getUserByEmail(email);

    if(!user) return null;

    const isValid = await comparePassword(password, user.password);
    if (!isValid) return null;

    return {
        id: user.id,
        email: user.email,
        name: `${user.firstname} ${user.lastname}`
    }
}