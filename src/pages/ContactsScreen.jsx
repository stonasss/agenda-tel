import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import ContactList from "../components/ContactList.jsx";
import useContacts from "../hooks/useContacts.jsx";
import UserContext from "../context/UserContext.jsx";

export default function ContactsScreen() {
    const { submitForm } = useContacts("/user-contacts")
    const { setUserContacts } = useContext(UserContext)

    function fetchContacts() {
        submitForm()
    }

    useEffect(() => {
        fetchContacts()
    }, [setUserContacts])

    return (
        <>
            <div className="App flex w-full min-h-screen pb-8 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500">
                <NavBar />
                <ContactList />
            </div>
        </>
    )
}