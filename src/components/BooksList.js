import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../features/book/bookSlice";
import { useDispatch } from "react-redux";
import Header from "./Header";

function BooksList() {
    const books = useSelector((state) => state.book);
    console.log(books);

    // ------------------------------------
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    };

    return (
        <>
            <Header /> {/* Llamando al Componente Header */}
            <div className="container my-auto mx-auto grid min-h-screen w-full grid-cols-1 items-center justify-between gap-8 px-4 py-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-4">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="col-span-1 rounded-xl bg-slate-100 text-center shadow-lg xl:col-span-2"
                    >
                        <div className="grid grid-cols-1 items-center justify-center gap-4 p-5 xl:grid-cols-2">
                            <div className="col-span-1 mx-auto overflow-hidden rounded-xl">
                                <img
                                    src={book.image}
                                    alt="book front"
                                    className="rounded-xl object-cover"
                                />
                            </div>
                            <div className="col-span-1">
                                <p className="mt-3 text-lg font-bold md:text-xl">
                                    {book.title}
                                </p>
                                <p className="mt-3 text-lg text-slate-700">
                                    {book.author}
                                </p>
                                <p className="mt-3 text-lg text-slate-700">
                                    {book.year}
                                </p>
                                <p className="text-md mt-3 text-slate-500">
                                    {book.description}
                                </p>
                            </div>
                        </div>
                        <div className=" grid grid-cols-1 items-center justify-center py-5 xl:grid-cols-3">
                            <Link
                                className="col-span-1 mx-auto mt-4 w-3/5 rounded-lg border-2 bg-gradient-to-r from-blue-600 to-cyan-400 py-2 text-center font-semibold text-white transition-all duration-200 ease-out hover:border-blue-400 focus:scale-95 md:w-4/5"
                                to={`/details/${book.id}`}
                            >
                                Details
                            </Link>
                            <Link
                                className="col-span-1 mx-auto mt-4 w-3/5 rounded-lg border-2 bg-gradient-to-r from-yellow-400 to-orange-400 py-2 text-center font-semibold text-white transition-all duration-200 ease-out hover:border-orange-400 focus:scale-95 md:w-4/5"
                                to={`/updatebook/${book.id}`}
                            >
                                Edit
                            </Link>
                            <button
                                className="col-span-1 mx-auto mt-4 w-3/5 rounded-lg border-2 bg-gradient-to-br from-red-600 to-orange-400 py-2 text-center font-semibold text-white transition-all duration-200 ease-out hover:border-red-500 focus:scale-95 md:w-4/5"
                                onClick={() => handleDelete(book.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BooksList;
