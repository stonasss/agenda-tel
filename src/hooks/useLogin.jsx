import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useLogin = (relativeUrl, body) => {
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;
    const navigate = useNavigate();

    const { userData, setUserData } = useContext(UserContext);

    const submitForm = async (body) => {
        try {
            toast("Entrando...")
            const response = await axios.post(fullUrl, body)
            setUserData(response.data.user.token)
            toast("Usuário logado!")
            navigate('/home')
        } catch (error) {
            console.log(error)
            toast("Algum erro ocorreu.")
            setUserData('')
        } finally {
            console.log(userData)
        }
    };

    return { submitForm };
};

export default useLogin;