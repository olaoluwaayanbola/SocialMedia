import { useState } from "react"

export const useForm = (initialStates:object) => {
    const [form,setForm] = useState<any>(initialStates)
    
    const HandleForm = (event:any):void => {
        const { type, name, value, checked} = event.target
        setForm((prevValues:any) => ({
            ...prevValues,
            [name]:value
        })) 
    }
    return ( {form,HandleForm} )
}