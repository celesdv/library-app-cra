import { useState } from "react";
import { useDispatch } from "react-redux";
import {addBook} from "../features/book/bookSlice";
import {v4 as uuid} from "uuid";

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

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
        ...book,
        id: uuid(),
    }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        name="author"
        type="text"
        placeholder="author"
        onChange={handleChange}
      />
      <input
        name="year"
        type="year"
        placeholder="year"
        onChange={handleChange}
      />
      <input
        name="ISBN"
        type="number"
        placeholder="ISBN"
        onChange={handleChange}
      />
      <input
        name="image"
        type="image"
        placeholder="image"
        alt="image"
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
      ></textarea>

      <button>Save</button>
    </form>
  );
}

// export const { addBook } = bookSlice.actions;
export default BooksForm;
