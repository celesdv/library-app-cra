import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksForm from "./components/BooksForm";
import BooksList from "./components/BooksList";

import LoginSc from "./components/LoginSc";
import Login from "./components/login/Login";
import Register from "./components/login/Register";



function App() {
  return (
    <div className="App">
      {/* <h1>Books App</h1> */}
       {/* Enrutamiento  */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="booksform" element={<BooksForm />} />
        <Route path="updatebook/:id" element={<BooksForm />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      {/* Rutas del login/register */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="loginsc" element={<LoginSc />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
