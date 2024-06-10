import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useAddContact = (relativeUrl, body) => {
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData } = useContext(UserContext)

    const submitForm = async (body) => {
        try {
            toast("Adicionando contato...")
            await axios.post(fullUrl, body, {headers: { Authorization: `Bearer ${userData}` } })
            toast("Contato adicionado!")
        } catch (error) {
            console.log(error)
            toast("Algum erro ocorreu.")
        }
    };

    return { submitForm };
};

export default useAddContact;