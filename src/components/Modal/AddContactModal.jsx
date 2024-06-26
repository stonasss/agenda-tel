import { useState } from "react";
import useAddContact from "../../hooks/useAddContact";

export default function AddContactModal({ addContactModal, onClose }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState('')
    const { /* isLoading: submitting, error: submitError, */ submitForm } = useAddContact("/contacts")

    if (!addContactModal) return null;

    async function handleSubmit(event) {
        event.preventDefault()
        const body = {name, image, phone, email}
        submitForm(body)
        setName('');
        setImage('');
        setPhone('');
        setEmail('');
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 z-50 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">

                <div className="flex flex-col w-80 bg-gradient-to-r from-cyan-400 to-lime-600 p-8 rounded-xl">
                    <div className="close relative bottom-7 left-4 text-xl flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                        <p className="absolute text-sky-100">x</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">

                        <div className="flex flex-col my-4">
                            <label className="text-base mb-1" htmlFor='name'>Nome</label>
                            <input
                                type="text"
                                id="name"
                                className="rounded-lg p-2 placeholder:text-xs"
                                placeholder="Nome"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required />
                        </div>

                        <div className="flex flex-col my-4">
                            <label className="text-base mb-1" htmlFor='email'>Email</label>
                            <input
                                type="email"
                                id="email"
                                className="rounded-lg p-2 placeholder:text-xs"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                        </div>

                        <div className="flex flex-col my-4">
                            <label className="text-base mb-1" htmlFor='number'>Telefone</label>
                            <input
                                type="number"
                                id="tel"
                                className="rounded-lg p-2 placeholder:text-xs"
                                placeholder="Telefone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required />
                        </div>

                        <div className="flex flex-col my-4">
                            <label className="text-base mb-1" htmlFor='url'>Foto</label>
                            <input
                                type="url"
                                id="url"
                                className="rounded-lg p-2 placeholder:text-xs"
                                placeholder="URL de Imagem"
                                value={image}
                                onChange={e => setImage(e.target.value)}
                                required />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="rounded-full mt-4 font-bold text-cyan-950 bg-cyan-200 w-[110px] h-[30px] text-sm"
                            >Adicionar</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}