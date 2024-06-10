import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';

const useLogin = (relativeUrl, body) => {
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;
    const navigate = useNavigate();

    const { setUserData } = useContext(UserContext);

    const submitForm = async (body) => {
        let loginToast = null;

        try {
            loginToast = toast.info("Entrando...", { autoClose: false })
            const response = await axios.post(fullUrl, body)
            setUserData(response.data.user.token)
            toast("Usuário logado!")
            toast.dismiss(loginToast)
            navigate('/home')
        } catch (error) {
            console.log(error)
            toast.dismiss(loginToast)
            toast("Algum erro ocorreu. Errou alguma informação?")
            setUserData('')
        }
    };

    return { submitForm };
};

export default useLogin;