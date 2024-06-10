import React, { useContext, useEffect } from "react";
import useContacts from "../hooks/useContacts";
import Add from "../assets/add-circle-outline.svg";
import Edit from "../assets/create-outline.svg";
import Delete from "../assets/trash-outline.svg";
import ContactContext from "../context/ContactContext";

export default function ContactList({ 
    addContactModal, 
    setAddContactModal, 
    editContactModal, 
    setEditContactModal,
    deleteContactModal,
    setDeleteContactModal
    }) {
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

    const handleDeleteContact = (phone, image) => {
        setContactPhone(phone)
        setContactImage(image)
        setDeleteContactModal(!deleteContactModal)
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
    }, [addContactModal, editContactModal, deleteContactModal, fetchData])

    return (
        <>
        <div className="container m-auto mt-16 max-w-full sm:bg-gray-100 border-cyan-600 sm:mt-28 sm:max-w-xl sm:max-h-full">
            <div onClick={handleAddContact} className="sm:relative hover:cursor-pointer">
                <h1 className="italic absolute left-12 bottom-24 sm:absolute sm:left-8 sm:bottom-2 w-[132px] text-m">Novo Contato</h1>
                <img src={Add} alt="adicionar contato" className="absolute left-5 bottom-24 w-6 sm:left-3 sm:bottom-3 sm:w-4" />
            </div>
                <div className="flex flex-col sm:text-gray-800 font-semibold overflow-y-scroll h-[595px] p-4 text-xs">
                {userContacts.length ? (
                    userContacts.map((contact) => (
                        <div key={contact.id} className="relative border-b border-solid pt-4 pb-4">
                            <div className="flex flex-row">
                                <img src={contact.image} alt="avatar" className="rounded-full w-12"/>
                                <h1 className="absolute left-16 top-8 w-32">{contact.name}</h1>
                            </div>
                            <span className="flex absolute top-6 left-40 flex-col sm:static sm:flex-row">
                                <h1 className="static sm:absolute sm:left-48 sm:bottom-8">{contact.phone}</h1>
                                <h2 className="static sm:absolute sm:left-[320px] sm:bottom-8">{contact.email}</h2>
                            </span>
                            <span className="flex absolute p-2 flex-col right-0 top-3 sm:flex-row sm:right-2 sm:top-6">
                                <img 
                                    onClick={() => handleEditContact(contact.name, contact.image, contact.phone, contact.email)}
                                    src={Edit} 
                                    alt="editar contato" 
                                    className="w-4 right-7 bottom-8 mb-1.5 sm:mr-2 sm:mb-0 hover:cursor-pointer"
                                />
                                <img 
                                    onClick={() => handleDeleteContact(contact.phone, contact.image)}
                                    src={Delete} 
                                    alt="deletar contato" 
                                    className="w-4 right-1 bottom-8 hover:cursor-pointer"
                                />
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