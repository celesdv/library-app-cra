import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, updatebook } from "../features/book/bookSlice";
import { v4 as uuid } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";

function BooksForm() {
    const [book, setBook] = useState({
        title: "",
        author: "",
        year: "",
        ISBN: "",
        image: "",
        description: "",
    });

    // Función que permite disparar eventos desde nuestro Slice
    const dispatch = useDispatch();

    // Funcion que permite tomar un parametro desde la URL
    const params = useParams();

    // Permite seleccionar el book a actualizar
    const books = useSelector((state) => state.book);

    // Funcion que permite navegar entre las rutas
    const navigate = useNavigate();

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Condicional que verifica si existe un id en el params de la URL, si existe ejecuta un Dispatch con el update sino ejecuta el agregar
        if (params.id) {
            dispatch(updatebook({ ...book, id: params.id }));
        } else {
            dispatch(
                addBook({
                    ...book,
                    id: uuid(),
                })
            );
        }
        navigate("/");
    };

    // Escucha si existe un param en la URL, si existe ejecuta un setBook con una funcion find() que busca el libro segun el id y lo carga al formulario
    useEffect(() => {
        if (params.id) {
            setBook(books.find((book) => book.id === params.id));
        }
    }, [params, books]);

    return (
        <div className="container relative mx-auto flex min-h-screen w-full items-center justify-center">
            <div className="absolute mx-auto flex w-10/12 flex-col overflow-hidden rounded-xl bg-white shadow-lg lg:w-8/12 lg:flex-row">
                <div className="flex w-full flex-col items-center justify-center bg-image-bookform bg-cover bg-center p-40 lg:w-1/2 lg:p-12"></div>
                <div className="w-full py-16 px-12 lg:w-1/2">
                    <p className="mb-4 text-3xl">Add or Edit Books</p>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">
                            <input
                                name="title"
                                type="text"
                                placeholder="title"
                                className="border border-gray-400 py-1 px-2"
                                onChange={handleChange}
                                value={book.title}
                                required
                            />
                            <input
                                name="author"
                                type="text"
                                placeholder="author"
                                className="border border-gray-400 py-1 px-2"
                                onChange={handleChange}
                                value={book.author}
                                required
                            />
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-5">
                            <input
                                name="year"
                                type="number"
                                placeholder="year"
                                className="border border-gray-400 py-1 px-2"
                                onChange={handleChange}
                                value={book.year}
                                required
                            />
                            <input
                                name="ISBN"
                                type="number"
                                placeholder="ISBN"
                                className="border border-gray-400 py-1 px-2"
                                onChange={handleChange}
                                value={book.ISBN}
                                required
                            />
                        </div>
                        <div className="mt-5">
                            <input
                                name="image"
                                type="url"
                                placeholder="Insert image url"
                                alt="book front"
                                className="w-full border border-gray-400 py-1 px-2"
                                onChange={handleChange}
                                value={book.image}
                                required
                            />
                        </div>
                        <div className="mt-5">
                            <textarea
                                name="description"
                                placeholder="description"
                                className="w-full border border-gray-400 py-1 px-2"
                                onChange={handleChange}
                                value={book.description}
                                required
                            ></textarea>
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-5">
                            <button
                                className="col-span-1 mr-2 mb-2 rounded-lg border border-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-300"
                                onClick={() => navigate("/")}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="col-span-1 mr-2 mb-2 rounded-lg border border-purple-700 px-5 py-2.5 text-center text-sm font-medium text-purple-700 hover:bg-purple-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-300"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// export const { addBook } = bookSlice.actions;
export default BooksForm;
