import React, { useContext } from "react";
import useContacts from "../hooks/useContacts";
import UserContext from "../context/UserContext";

export default function ContactList() {
    const { userContacts } = useContext(UserContext);

    return (
        <div className="container m-auto mt-24 max-w-xl bg-lime-500">
            {userContacts.length === 0 ? <div className="text-base">Nenhum contato registrado...</div> :
            <div className="">
                <h1>hello</h1>
            </div>
            }
        </div>
    )
}