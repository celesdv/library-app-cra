import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Details() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
    ISBN: "",
    image: "",
    description: "",
  });

  const params = useParams();

  const books = useSelector((state) => state.book);
  
  useEffect(() => {
    if (params.id) {
      setBook(books.find((book) => book.id === params.id));
    }
  }, [params, books]);

  return (
    <div>
        {book.title}
    </div>
  );
}

export default Details;
