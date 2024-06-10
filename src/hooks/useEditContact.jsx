import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useEditContact = (relativeUrl, body) => {
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData } = useContext(UserContext)

    const updateData = async (body) => {
        let updateToast = null;

        try {
            updateToast = toast.info("Atualizando contato...", { autoClose: false })
            await axios.put(fullUrl, body, {headers: { Authorization: `Bearer ${userData}` } })
            toast("Contato atualizado!")
            toast.dismiss(updateToast)
        } catch (error) {
            console.log(error)
            toast.dismiss(updateToast)
            toast("Algum erro ocorreu.")
        }
    };

    return { updateData };
};

export default useEditContact;