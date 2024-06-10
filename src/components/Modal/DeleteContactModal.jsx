import { useContext } from "react";
import useDeleteContact from "../../hooks/useDeleteContact";
import ContactContext from "../../context/ContactContext";

export default function DeleteContactModal({ deleteContactModal, onClose }) {
    const { /* isLoading: submitting, error: submitError, */ deleteData } = useDeleteContact("/contacts")
    const {
        contactPhone,
        contactImage
    } = useContext(ContactContext)

    if (!deleteContactModal) return null;

    async function handleDeletion(event) {
        event.preventDefault()
        const body = {phone: contactPhone}
        deleteData(body);
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 z-50 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">

                <div className="flex flex-col w-80 bg-gradient-to-r from-cyan-400 to-lime-600 p-8 rounded-xl">
                    <div className="close relative bottom-7 left-4 text-xl flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                        <p className="absolute text-sky-100">x</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <span className="flex flex-col items-center">
                            <h1 className="mb-4 text-l">Deletar contato?</h1>
                            <img className="rounded-full w-12" src={contactImage} />
                        </span>
                    </div>

                    <div>
                        <button
                            onClick={handleDeletion}
                            className="flex justify-center mx-auto items-center rounded-full mt-4 font-bold text-cyan-950 bg-cyan-200 w-[110px] h-[30px] text-sm"
                        >Deletar</button>
                    </div>
                </div>
            </div>
        </>
    )
}