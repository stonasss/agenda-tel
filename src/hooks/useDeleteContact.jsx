import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useDeleteContact = (relativeUrl, body) => {
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData } = useContext(UserContext)

    const deleteData = async (body) => {
        try {
            toast("Deletando usuário...")
            await axios.delete(fullUrl, {headers: { Authorization: `Bearer ${userData}` }, data: body } )
            toast("Usuário deletado!")
        } catch (error) {
            console.log(error)
            toast("Algum erro ocorreu.")
        }
    };

    return { deleteData };
};

export default useDeleteContact;