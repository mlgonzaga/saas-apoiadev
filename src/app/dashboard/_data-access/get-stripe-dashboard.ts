"use server"
import {stripe} from '@/lib/stripe'
import { get } from 'lodash'

export async function getStripeDashboard(accountId: string | undefined) {

    if(!accountId){
        return null
    }

    try{
        const loginLink = await stripe.accounts.createLoginLink(accountId)

         return loginLink.url
    }catch(err) {
        
        return null
    }
}