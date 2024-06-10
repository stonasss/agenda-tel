import axios from "axios";
import { toast } from 'react-toastify';

const useRegister = (relativeUrl, body) => {
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const submitForm = async (body) => {
        try {
            toast("Cadastro sendo realizado...")
            await axios.post(fullUrl, body)
            toast("Cadastro realizado!")
        } catch (error) {
            console.log(error)
            toast("Algum erro ocorreu.")
        }
    };

    return { submitForm };
};

export default useRegister;