import React, { useState } from 'react'

const useForm = ((inicialstate = {}) => { // Se busca que el inicialstate sea un objeto exactamente igual a const [formstate, setFormState] = useState( name: "",email: "",password:" }). Por lo que este recibiria email, name, password

    const [values, setFormValues] = useState(inicialstate)
    
    const reset = () => {
        setFormValues(inicialstate)
    }
    
    const handleinputchange = ({ target }) => {
        setFormValues({
            ...values,
            [target.name]: target.value
        })}
    return[values, handleinputchange, reset]
})

export default useForm
