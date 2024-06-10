import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useAddContact = (relativeUrl, body) => {
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData } = useContext(UserContext)

    const submitForm = async (body) => {
        //setIsLoading(true);
        setError(null);

        try {
            toast("Adicionando contato...")
            await axios.post(fullUrl, body, {headers: { Authorization: `Bearer ${userData}` } })
            toast("Contato adicionado!")
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

export default useAddContact;