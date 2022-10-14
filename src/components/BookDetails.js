import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteBook } from "../features/book/bookSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";

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
    dispatch(deleteBook(id));
  };

  const params = useParams();

  const books = useSelector((state) => state.book);

  useEffect(() => {
    if (params.id) {
      setBook(books.find((book) => book.id === params.id));
    }
  }, [params, books]);

  return (
    <>
      <Header />
      <div className="container my-auto mx-auto grid min-h-screen w-full grid-cols-1 items-center justify-between gap-8 px-4 py-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-4">

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
        <div className=" grid grid-cols-1 items-center justify-center py-5 xl:grid-cols-3">
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
    </>
  );
}

export default Details;
