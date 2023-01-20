import {useForm} from "../../customsHooks/DynamicFormControlled"
// import {FormLogin} from "../../interfaces/FormLoginInterface"
export const Login = () => {
    const data = {
        Email:"",
        Password:undefined
    }
    const { form,HandleForm }:any = useForm(data)
    console.log(form)
    
    return(
        <>
            <input name="Email" value={form.Email} onChange={HandleForm}/>
            <input name="Email" value={form.Password} onChange={HandleForm}/>
            
        </>
    )
}