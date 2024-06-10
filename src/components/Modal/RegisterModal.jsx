import { useState } from "react";
import useRegister from "../../hooks/useRegister";

export default function RegisterModal({ registerModal, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { /* isLoading: submitting, error: submitError, */ submitForm } = useRegister("/register")
    if (!registerModal) return null;

    async function handleSubmit(event) {
        event.preventDefault()
        const body = {email, password, confirmPassword}
        submitForm(body)
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 z-50 bg-opacity-20 flex justify-center items-center">

                <div className="flex flex-col bg-gradient-to-r from-cyan-400 to-cyan-600 p-8 rounded-xl">
                    <div className="close relative bottom-7 left-4 text-xl flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                        <p className="absolute text-sky-100">x</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">

                        <div className="flex flex-col my-4">
                            <label className="text-base mb-1" htmlFor='email'>Email</label>
                            <input
                                type="text"
                                id="email"
                                className="rounded-lg p-2 placeholder:text-xs"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                        </div>

                        <div className="flex flex-col my-4">
                            <label className="text-base mb-1" htmlFor='password'>Senha</label>
                            <input
                                type="password"
                                id="password"
                                className="rounded-lg p-2 placeholder:text-xs"
                                placeholder="Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </div>

                        <div className="flex flex-col my-4">
                            <label className="text-base mb-1" htmlFor='password'>Confirmar Senha</label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="rounded-lg p-2 placeholder:text-xs"
                                placeholder="Confirmar Senha"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="rounded-full mt-4 font-bold text-cyan-950 bg-cyan-200 w-[110px] h-[30px] text-sm hover:bg-gray-400"
                            >Cadastrar</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}