import { useState } from "react"

export const useForm = ({initialStates ,interface}) => {
    const [form,setForm] = useState<interface>(initialStates)
    
    const HandleForm = (event:React.FormEvent<HTMLFormElement>) => {
        const { type, name, value, checked} = event.target
        setForm((prevValues) => ({
            ...prevValues,
            type === "checkbox" ? checked : value
        }))
    }
    return [form,HandleForm]
}