import { DefaultSession } from 'next-auth'


declare module 'next-auth' {
    interface Session {
        id:User & DefaultSession["user"]
    }

    interface User {
        id: string
        name?:string
        email?:string
        username?:string
        bio?:string
    }
}

