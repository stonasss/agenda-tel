import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';

const useRegister = (relativeUrl, body) => {
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const submitForm = async (body) => {
        //setIsLoading(true);
        setError(null);

        try {
            toast("Cadastro sendo realizado...")
            await axios.post(fullUrl, body)
            toast("Cadastro realizado!")
        } catch (error) {
            console.log(error)
            setError(error.message || "Unknown error occurred");
            toast("Algum erro ocorreu.")
        } finally {
            //setIsLoading(false);
        }
    };

    return { /* isLoading, */ error, submitForm };
};

export default useRegister;