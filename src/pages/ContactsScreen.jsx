import React, { useState } from "react";
import NavBar from "../components/NavBar.jsx";
import ContactList from "../components/ContactList.jsx";
import AddContactModal from "../components/Modal/AddContactModal.jsx";
import EditContactModal from "../components/Modal/EditContactModal.jsx";

export default function ContactsScreen() {
    const [addContactModal, setAddContactModal] = useState(false);
    const [editContactModal, setEditContactModal] = useState(false);

    return (
        <>
            <div className="App flex w-full min-h-screen pb-8 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500">
                <NavBar />
                    <AddContactModal 
                        addContactModal={addContactModal} 
                        onClose={() => setAddContactModal(false)} 
                    />

                    <EditContactModal 
                        editContactModal={editContactModal} 
                        onClose={() => setEditContactModal(false)} 
                    />

                    <ContactList 
                        addContactModal={addContactModal}
                        setAddContactModal={setAddContactModal} 
                        editContactModal={editContactModal}
                        setEditContactModal={setEditContactModal}
                    />
            </div>
        </>
    )
}