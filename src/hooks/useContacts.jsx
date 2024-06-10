import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useContacts = (relativeUrl) => {
    const [userContacts, setUserContacts] = useState([]);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const { userData } = useContext(UserContext)

    const fetchData = async () => {
        try {
            await axios.get(fullUrl, {headers: { Authorization: `Bearer ${userData}` } })
                .then((res) => {
                    const contacts = res.data.contacts
                    setUserContacts(contacts)
                })
        } catch (error) {
            console.log(error)
            toast("Algum erro ocorreu.")
        }
    };

    return { fetchData, userContacts };
};

export default useContacts;