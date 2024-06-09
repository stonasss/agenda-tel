import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const useRegister = (relativeUrl, body) => {
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData } = useContext(UserContext)

    const submitForm = async (body) => {
        //setIsLoading(true);
        setError(null);

        try {
            console.log(userData)
            await axios.post(fullUrl, body, {headers: { Authorization: `Bearer ${userData}` } })
        } catch (error) {
            console.log(error)
            setError(error.message || "Unknown error occurred");
        } finally {
            //setIsLoading(false);
        }
    };

    return { /* isLoading, */ error, submitForm };
};

export default useRegister;