import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {deleteBook} from "../features/book/bookSlice";
import { useDispatch } from "react-redux";

function BooksList() {
  const books = useSelector((state) => state.book)
  console.log(books);

  
  // ------------------------------------
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  }
  

  return (
    <div>
      <Link to="/booksform">
        Add Book
      </Link>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <div><img src={book.image} alt="book front"/></div>
          <h3>{book.author}</h3>
          <h3>{book.year}</h3>
          <p>{book.description}</p>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
          <Link to={`/updatebook/${book.id}`} >
            Edit
          </Link>
          <Link to={`/details/${book.id}`} >
            Details
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BooksList