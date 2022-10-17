import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook } from "../features/book/bookSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Swal from "sweetalert2";
// import Header from "./Header";

function Details() {
    const [book, setBook] = useState({
        title: "",
        author: "",
        year: "",
        ISBN: "",
        image: "",
        description: "",
    });

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteBook(id));
                Swal.fire(
                    "Book Deleted!",
                    "Your book has been deleted.",
                    "success"
                );
            }
        });
    };

    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const params = useParams();

    const books = useSelector((state) => state.book);

    useEffect(() => {
        if (params.id) {
            setBook(books.find((book) => book.id === params.id));
        }
    }, [params, books]);

    return (
        <>
            {/* <Header /> */}
            <div className="container my-auto mx-auto flex min-h-screen w-full items-center justify-between p-4">
                <div className="relative my-auto mx-auto grid grid-cols-1 items-center justify-between gap-6 rounded-xl bg-slate-100 px-4 py-5 md:h-[50%] md:grid-cols-2 md:gap-2 lg:h-[50%] lg:w-[70%] lg:grid-cols-3 lg:gap-4">
                    <button
                        className="group absolute top-0 right-0 mx-2 my-2 rounded-full bg-slate-100 px-2 py-1 hover:bg-red-500 md:bg-transparent"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <span className="text-xl font-bold text-gray-700 group-hover:text-white">
                            X
                        </span>
                    </button>
                    <div className="col-span-1 mx-auto overflow-hidden rounded-xl">
                        <img
                            src={book.image}
                            alt="book front"
                            className="rounded-xl object-cover"
                        />
                    </div>
                    <div className="col-span-1 lg:col-span-2">
                        <p className="mt-3 text-lg font-bold md:text-xl">
                            {book.title}
                        </p>
                        <p className="mt-3 text-lg text-slate-700">
                            Author: {book.author}
                        </p>
                        <p className="mt-3 text-lg text-slate-700">
                            Year: {book.year}
                        </p>
                        <p className="mt-3 text-lg text-slate-700">
                            ISBN: {book.ISBN}
                        </p>
                        <p className="text-md mt-3 text-slate-500">
                            {book.description}
                        </p>
                    </div>
                    {/* Verifica si hay un usuario logueado y muestra los botones de Editar y Eliminar */}
                    {currentUser && (
                        <div className="col-span-1 md:col-span-2 lg:col-span-3">
                            <div className=" grid grid-cols-1 items-center justify-center py-5 md:grid-cols-2 lg:grid-cols-1">
                                <Link
                                    className="col-span-1 mx-auto mt-4 w-3/5 rounded-lg border-2 bg-gradient-to-r from-yellow-400 to-orange-400 py-2 text-center font-semibold text-white transition-all duration-200 ease-out hover:border-orange-400 focus:scale-95 md:w-4/5"
                                    to={`/updatebook/${book.id}`}
                                >
                                    Edit
                                </Link>
                                <Link
                                    className="col-span-1 mx-auto mt-4 w-3/5 rounded-lg border-2 bg-gradient-to-br from-red-600 to-orange-400 py-2 text-center font-semibold text-white transition-all duration-200 ease-out hover:border-red-500 focus:scale-95 md:w-4/5"
                                    onClick={() => handleDelete(book.id)}
                                    to={`/`}
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Details;
