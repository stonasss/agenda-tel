import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useLogin = (relativeUrl, body) => {
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;
    const navigate = useNavigate();

    const { setUserData } = useContext(UserContext)

    const submitForm = async (body) => {
        //setIsLoading(true);
        setError(null);

        try {
            toast("Login sendo realizado...")
            await axios.post(fullUrl, body)
                .then((res) => {
                    setUserData(res.data.user.token)
                })
            toast("Logado com sucesso!")
        } catch (error) {
            console.log(error)
            setError(error.message || "Unknown error occurred");
            toast("Algum erro ocorreu.")
        } finally {
            //setIsLoading(false);
            navigate('/home')
        }
    };

    return { /* isLoading, */ error, submitForm };
};

export default useLogin;