import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, updatebook } from "../features/book/bookSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={book.title}
      />
      <input
        name="author"
        type="text"
        placeholder="author"
        onChange={handleChange}
        value={book.author}
      />
      <input
        name="year"
        type="year"
        placeholder="year"
        onChange={handleChange}
        value={book.year}
      />
      <input
        name="ISBN"
        type="number"
        placeholder="ISBN"
        onChange={handleChange}
        value={book.ISBN}
      />
      <input
        name="image"
        type="url"
        placeholder="Insert image url"
        alt="book front"
        onChange={handleChange}
        value={book.image}
      />

      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={book.description}
      ></textarea>
        <button type="submit">Save</button>
    </form>
  );
}

// export const { addBook } = bookSlice.actions;
export default BooksForm;
