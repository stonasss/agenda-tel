import React, { useState } from "react";
import Authentication from "../components/Authentication.jsx";
import NavBar from "../components/NavBar.jsx";
import RegisterModal from "../components/Modal/RegisterModal.jsx";

export default function AuthScreen() {
    const [registerModal, setRegisterModal] = useState(false);

    return (
        <>
            <div className="App w-full min-h-screen pb-8 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500">
                <NavBar EnableAuth={false} />
                <RegisterModal registerModal={registerModal} onClose={() => setRegisterModal(false)} />
                <Authentication registerModal={registerModal} setRegisterModal={setRegisterModal} />
            </div>
        </>
    )
}