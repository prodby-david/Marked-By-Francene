import { prisma } from "@/shared/lib/prisma";

export const SignUpRepository = {

    async create(data: {
        name: string;
        email: string;
        password: string;
    }) {
        return await prisma.user.create({ data });
    }

}