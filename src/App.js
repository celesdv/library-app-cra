import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksForm from "./components/BooksForm";
import BooksList from "./components/BooksList";

function App() {
  return (
    <div className="App">
      <h1>Books App</h1>
       {/* Enrutamiento  */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="booksform" element={<BooksForm />} />
        <Route path="updatebook/:id" element={<BooksForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
