import { useState } from "react"

export const useForm = (initialStates) => {
    const [form,setForm] = useState<any>(initialStates)
    
    const HandleForm = (event:any):void => {
        const { type, name, value, checked} = event.target
        setForm((prevValues) => {
            return(
                ...prevValues,
                [name]: type === "checkbox" ? checked : value
            )
        }) 
    }
    return { form,HandleForm }
}