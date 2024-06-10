import React, { useContext, useState } from "react"
import useLogin from "../hooks/useLogin";
import UserContext from "../context/UserContext"

export default function Authentication({ registerModal, setRegisterModal }){
    const { userData, setUserData } = useContext(UserContext);
    setUserData('')

    const handleClick = () =>{
        setRegisterModal(!registerModal)
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { /* isLoading: submitting, error: submitError, */ submitForm } = useLogin("/")

    async function handleSubmit(event) {
        event.preventDefault()
        const body = {email, password}
        submitForm(body)
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center">
                <div className="flex flex-col from-cyan-200 to-cyan-450 p-8 rounded-xl">

                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                        <div className="flex flex-col mt-3">
                            <label className="text-base m-2" htmlFor='email'>Email</label>
                            <input
                                type="email"
                                id="email"
                                className="rounded-lg p-2 placeholder:text-xs"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                        </div>

                        <div className="flex flex-col m-4">
                            <label className="text-base m-2" htmlFor='password'>Senha</label>
                            <input
                                type="password"
                                id="password"
                                className="rounded-lg p-2 placeholder:text-xs"
                                placeholder="Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="rounded-full mt-4 font-bold hover:bg-slate-300 bg-lime-500 w-[110px] h-[30px] text-sm"
                            >Entrar</button>
                        </div>
                    </form>

                    <h1 className="mt-5 italic hover:cursor-default text-center">Não possui conta?</h1>
                    <button
                        className="font-bold hover:text-slate-500"
                        onClick={handleClick}
                    >Cadastrar</button>
                </div>
            </div>
        </>
    )
}