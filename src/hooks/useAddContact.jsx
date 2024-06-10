import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useAddContact = (relativeUrl, body) => {
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData } = useContext(UserContext)

    const submitForm = async (body) => {
        let newContactToast = null;

        try {
            newContactToast = toast.info("Adicionando contato...", { autoClose: false })
            await axios.post(fullUrl, body, {headers: { Authorization: `Bearer ${userData}` } })
            toast("Contato adicionado!")
            toast.dismiss(newContactToast)
        } catch (error) {
            console.log(error)
            toast.dismiss(newContactToast)
            toast("Algum erro ocorreu.")
        }
    };

    return { submitForm };
};

export default useAddContact;