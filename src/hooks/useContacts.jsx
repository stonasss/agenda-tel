import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const useContacts = (relativeUrl) => {
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData, userContacts, setUserContacts } = useContext(UserContext)

    const submitForm = async () => {
        //setIsLoading(true);
        setError(null);

        try {
            await axios.get(fullUrl, {headers: { Authorization: `Bearer ${userData}` } })
                .then((res) => {
                    setUserContacts(res.data.contacts)
                    console.log(res.data.contacts)
                })
        } catch (error) {
            console.log(error)
            setError(error.message || "Unknown error occurred");
        } finally {
            //setIsLoading(false);
        }
    };

    return { /* isLoading, */ error, submitForm };
};

export default useContacts;