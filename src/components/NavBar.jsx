import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function NavBar({ EnableAuth }) {
    const navigate = useNavigate()

    async function handleLogout() {
        navigate('/')
        toast('Usuário deslogado!')
    }

    return (
        <>
        {!EnableAuth ? (
            <div className="header z-10 top-0 fixed bg-gradient-to-r from-cyan-950 via-cyan-600 to-cyan-950 w-screen h-14 flex">
                <div className="flex mx-auto space-x-96 items-center">
                    <h1 className="title font-sans font-bold text-white text-xl hover:cursor-default">Lista de Contatos</h1>
                </div>
            </div> ) :(
            <div className="header z-10 top-0 fixed bg-gradient-to-r from-cyan-950 via-cyan-600 to-cyan-950 w-screen h-14 flex">
                <div className="flex relative mx-auto space-x-96 items-center">
                    <h1 className="title font-sans font-bold text-white text-xl hover:cursor-default">Lista de Contatos</h1>
                        <button onClick={handleLogout} className="absolute text-xs w-[60px] h-[25px] left-[-210px] sm:left-[-150px] rounded-full font-bold text-cyan-950 bg-cyan-200 sm:w-[80px] sm:h-[30px] text-sm hover:bg-gray-400">
                            Deslogar
                        </button>
                </div>
            </div>
            )}
        </>
    )
    
}