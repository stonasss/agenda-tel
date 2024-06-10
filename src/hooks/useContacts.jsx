import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useContacts = (relativeUrl) => {
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const [userContacts, setUserContacts] = useState([]);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData } = useContext(UserContext)

    const fetchData = async () => {
        //setIsLoading(true);
        setError(null);

        try {
            await axios.get(fullUrl, {headers: { Authorization: `Bearer ${userData}` } })
                .then((res) => {
                    const contacts = res.data.contacts.contacts
                    setUserContacts(contacts)
                })
        } catch (error) {
            console.log(error)
            setError(error.message || "Unknown error occurred");
            toast("Algum erro ocorreu.")
        } finally {
            //setIsLoading(false);
        }
    };

    return { /* isLoading, */ error, fetchData, userContacts };
};

export default useContacts;