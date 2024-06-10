import axios from "axios";
import { toast } from 'react-toastify';

const useRegister = (relativeUrl, body) => {
    const fullUrl = `${process.env.REACT_APP_API_BASE_URL}${relativeUrl}`;

    const submitForm = async (body) => {
        try {
            const promise = axios.post(fullUrl, body)
            toast.promise(
                promise,
                {
                    pending: "Cadastro sendo realizado...",
                    success: "Cadastro realizado!",
                    error: "Algum erro ocorreu. Errou alguma informação?"
                }
            )
            await promise;
        } catch (error) {
            console.log(error)
        }
    };

    return { submitForm };
};

export default useRegister;