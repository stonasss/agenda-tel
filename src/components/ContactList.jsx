import React, { useContext, useEffect } from "react";
import useContacts from "../hooks/useContacts";
import Add from "../assets/add-circle-outline.svg";
import Edit from "../assets/create-outline.svg";
import Delete from "../assets/trash-outline.svg";
import ContactContext from "../context/ContactContext";

export default function ContactList({ addContactModal, setAddContactModal, editContactModal, setEditContactModal }) {
    const { fetchData, userContacts } = useContacts("/user-contacts")
    const {
        setContactName,
        setContactImage,
        setContactPhone,
        setContactEmail
    } = useContext(ContactContext)

    const handleAddContact = () => {
        setAddContactModal(!addContactModal)
    }

    const handleEditContact = (contact, image, phone, email) => {
        setContactName(contact)
        setContactImage(image)
        setContactPhone(phone)
        setContactEmail(email)
        setEditContactModal(!editContactModal)
    }

    useEffect(() => {
        fetchData()
    }, [addContactModal, editContactModal, fetchData])

    return (
        <>
        <div className="container border-2 m-auto mt-28 max-w-xl h-[600px] bg-white border-cyan-600">
            <div onClick={handleAddContact} className="relative hover:cursor-pointer">
                <h1 className="absolute left-8 bottom-2 w-[132px] text-m">Adicionar Contato</h1>
                <img src={Add} alt="adicionar contato" className="absolute left-3 bottom-3 w-4" />
            </div>
                <div className="flex flex-col overflow-auto h-[595px] p-4 text-xs">
                {userContacts.length ? (
                    userContacts.map((contact) => (
                        <div key={contact.id} className="relative border-b border-solid pt-4 pb-4">
                            <div className="flex flex-row">
                                <img src={contact.image} alt="avatar" className="rounded-full w-12"/>
                                <h1 className="absolute left-14 top-8 w-32">{contact.name}</h1>
                            </div>
                            <span className="flex flex-row">
                                <h1 className="absolute left-48 bottom-8">{contact.phone}</h1>
                                <h2 className="absolute left-80 bottom-8">{contact.email}</h2>
                            </span>
                            <span className="flex flex-row">
                                <img 
                                    onClick={() => handleEditContact(contact.name, contact.image, contact.phone, contact.email)}
                                    src={Edit} 
                                    alt="editar contato" 
                                    className="absolute w-4 right-7 bottom-8 hover:cursor-pointer"
                                />
                                <img src={Delete} alt="deletar contato" className="absolute w-4 right-1 bottom-8 hover:cursor-pointer"/>
                            </span>
                        </div> )) 
                        ) : ( 
                        <div className="text-base">Nenhum contato registrado...</div> 
                    )}
                </div>
        </div>
        </>
    )
}