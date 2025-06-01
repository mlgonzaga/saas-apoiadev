"use server"
import { prisma } from '@/lib/prisma'

import { z } from 'zod'

const createUserSchema = z.object({
    username: z.string({message: 'O username é obrigatório'})

})

type CreateUserSchema = z.infer<typeof createUserSchema>

export async function getInfoUser(data:CreateUserSchema) {
    const schema = createUserSchema.safeParse(data)

    if(!schema.success) {
        return null
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: data.username
            },
            select:{
                id:true,
                name:true,
                username:true,
                bio:true,
                image:true,
                createdAt:true,
                updatedAt:true,
                connectedStripeAccountId: true,
            }
        })
        return user
    }catch(err) {
        return null
    }
}   