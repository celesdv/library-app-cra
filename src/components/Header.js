import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import ButtonLoginRegister from "./ButtonLoginRegister";
import SearchBooks from "./SearchBooks";

const Header = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="relative mx-auto flex h-screen w-full items-center justify-center bg-transparent bg-cover bg-center font-sans shadow-lg md:h-60">
            <span className="absolute h-screen w-full backdrop-blur-sm md:h-60"></span>
            <ButtonLoginRegister />
            <div className="absolute top-1/2 left-0 z-10 mx-auto grid w-full grid-cols-1 gap-2 px-4 text-center md:top-10 md:mx-auto md:mr-10 md:grid-cols-3 md:px-4">
                <p className="col-span-1 text-3xl text-green-400 md:col-span-3 md:text-5xl">
                    Library App
                </p>
                <div className="container relative col-span-1 my-auto w-full py-4 md:col-span-3 md:mx-auto">
                    <SearchBooks />
                </div>
                {/* Verifica si hay un Usuario Logueado y muestra el boton para Añadir Libro */}
                {currentUser && (
                    <div className="container relative col-span-1 my-auto flex w-full items-center justify-center py-4 md:col-span-3 md:mx-auto">
                        <Link
                            className="absolute mt-4 mb-2 w-3/5 rounded-lg border border-lime-600 bg-white px-5 py-2.5 text-center text-sm font-medium text-lime-500 transition-all duration-200 hover:bg-lime-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-300 md:w-1/5"
                            to="/booksform"
                        >
                            Add Book
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Header;
