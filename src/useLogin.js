import { useState } from "react";

export function useLogin({_onLogin}) {

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false   
    })

    function handleInput(event) {
        const { name, type, value, checked } = event.target

        setData(data => {
            return{
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    function getFormData(event) {

        event.preventDefault();
        _onLogin(data);
    }

    function handleResetForm() {
        
        setData({
            username: '',
            password: '',
            remember: false   
        }) 
    }

    return (
        {
            data: data,
            handleInput: handleInput,
            getFormData: getFormData,
            handleResetForm: handleResetForm,
        }
    )
}