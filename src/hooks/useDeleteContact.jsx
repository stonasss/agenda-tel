import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useDeleteContact = (relativeUrl, body) => {
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData } = useContext(UserContext)

    const deleteData = async (body) => {
        //setIsLoading(true);
        setError(null);

        try {
            toast("Deletando usuário...")
            await axios.delete(fullUrl, {headers: { Authorization: `Bearer ${userData}` }, data: body } )
            toast("Usuário deletado!")
        } catch (error) {
            console.log(error)
            setError(error.message || "Unknown error occurred");
            toast("Algum erro ocorreu.")
        } finally {
            //setIsLoading(false);
        }
    };

    return { /* isLoading, */ error, deleteData };
};

export default useDeleteContact;