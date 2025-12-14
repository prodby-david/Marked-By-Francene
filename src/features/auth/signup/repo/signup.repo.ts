import { prisma } from "@/shared/lib/prisma";

export const SignUpRepository = {

    async create(data: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
    }) {
        return await prisma.user.create({ data });
    }

}