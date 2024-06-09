import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const useLogin = (relativeUrl, body) => {
    //const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;
    const navigate = useNavigate();

    const { userData, setUserData } = useContext(UserContext)

    const submitForm = async (body) => {
        //setIsLoading(true);
        setError(null);

        try {
            await axios.post(fullUrl, body)
                .then((res) => {
                    setUserData(res.data)
                })
            alert('Login feito com sucesso!')
        } catch (error) {
            console.log(error)
            setError(error.message || "Unknown error occurred");
        } finally {
            //setIsLoading(false);
            navigate('/home')
            console.log(userData)
        }
    };

    return { /* isLoading, */ error, submitForm };
};

export default useLogin;