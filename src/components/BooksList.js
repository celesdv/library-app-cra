import React from 'react'
import { useSelector } from "react-redux";

function BooksList() {
  const books = useSelector((state) => state.book)
  console.log(books);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <h3>{book.year}</h3>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  )
}

export default BooksList