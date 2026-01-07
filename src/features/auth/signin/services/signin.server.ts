
import { getUserByEmail } from "../repo/signin.repo";
import { comparePassword } from "@/shared/lib/hashpassword";


export async function validateUser(email: string, password: string){

    const user = await getUserByEmail(email);

    if(!user || !user.password) return null;

    const isValid = await comparePassword(password, user.password);
    
    if (!isValid) return null;

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        password: user.password
    }
}