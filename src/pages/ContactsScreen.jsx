import React, { useState } from "react";
import NavBar from "../components/NavBar.jsx";
import ContactList from "../components/ContactList.jsx";
import AddContactModal from "../components/Modal/AddContactModal.jsx";

export default function ContactsScreen() {
    const [addContactModal, setAddContactModal] = useState(false);

    return (
        <>
            <div className="App flex w-full min-h-screen pb-8 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500">
                <NavBar />
                <AddContactModal addContactModal={addContactModal} onClose={() => setAddContactModal(false)} />
                <ContactList addContactModal={addContactModal} setAddContactModal={setAddContactModal} />
            </div>
        </>
    )
}