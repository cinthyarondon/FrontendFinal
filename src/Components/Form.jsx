import React from "react";
import {useState} from "react"

const Form = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [errorSelect, setErrorSelect] = useState("");
    const [send, setSend] = useState(false);

    const onChangeUserName = (event) => {
        setUserName(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const completeInput = (userName, email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (userName === "" || email === "") {
            setErrorSelect("Por favor verifique su información nuevamente")
            return false
        } else if (userName.trim().length < 6) {
            setErrorSelect("Por favor verifique su información nuevamente. El nombre debe contener al menos 6 caracteres")
            return false
        } else if (!emailRegex.test(email)) {
            setErrorSelect("Por favor verifique su información nuevamente. Ingrese un email valido")
            return false
        } else {
            return true
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorSelect("")
        setSend(false)

        const isCompleteInput = completeInput(userName, email)
        if (isCompleteInput) {
            setSend(true)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={userName}
                       onChange={onChangeUserName}/> <br/>
                <input type="text" placeholder="Email" value={email}
                       onChange={onChangeEmail}/> <br/>
                <input type="submit" value="Send"/>
            </form>
            <div className="error">{errorSelect}</div>
            {send ? `Gracias ${userName}, te contactaremos cuando antes vía mail”` : ''}
        </div>
    );
};

export default Form;
