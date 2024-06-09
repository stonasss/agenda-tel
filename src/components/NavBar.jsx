export default function NavBar() {
    return (
        <div className="header z-10 top-0 fixed bg-gradient-to-r from-cyan-950 via-cyan-600 to-cyan-950 w-screen h-14 flex">
            <div className="flex mx-auto space-x-96 items-center">
                <h1 className="title font-sans font-bold text-white text-xl hover:cursor-default">Lista de Contatos</h1>
            </div>
        </div>
    )
}