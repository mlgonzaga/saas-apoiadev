"use client"
import { ChangeEvent, useState, useRef } from "react"
import { debounce } from 'lodash'
import {changeName} from '../_actions/changeName'
import { toast } from "sonner"

export function Name({ initialName }: {initialName:string}) {
    const [name, setName] = useState(initialName)
    const [originalName] = useState(initialName)

    const deboucedSaveName = useRef(
        debounce(async (currentName)=>{
            if(currentName.trim() === ""){
                setName(originalName)
                return
            }

            if(currentName!== name) {
                try{
                    const response = await changeName( { name:currentName } )

                    if(response.error){
                        toast.error(response.error)
                        setName(originalName)
                        return
                    }

                    toast.success('Nome alterado com sucesso')


                }catch(err){
                    console.log(err)
                    setName(originalName)
                }
            }
        }, 500)
    ).current

    

    function handleChangeName(e:ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setName(value)

        deboucedSaveName(value)

    }

    return(
       <input 
       className="text-xl md:text-2xl font-bold bg-gray-50 rounded-md outline-none p-2 w-full max-w-2xl text-center my-3"
       value={name}
       onChange={handleChangeName}
        />
    )
}