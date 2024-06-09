import axios from "axios";
import { useState } from "react";

const useAuthorization = (relativeUrl, body) => {
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const submitForm = async (body) => {
        //setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post(fullUrl, body)
            console.log(response)
        } catch (error) {
            console.log(error)
            setError(error.message || "Unknown error occurred");
        } finally {
            //setIsLoading(false);
        }
    };

    return { /* isLoading, */ error, submitForm };
};

export default useAuthorization;