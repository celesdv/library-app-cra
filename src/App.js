import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksForm from "./components/BooksForm";
import BooksList from "./components/BooksList";
import Header from "./components/Header";


import Login from "./components/login/Login";
import Register from "./components/login/Register";
import { AuthProvider } from "./context/authContext";

import PrivateRoutes from "./components/PrivateRoutes";



function App() {

  return (
    <div className="App">
      {/* <h1>Books App</h1> */}
       {/* Enrutamiento  */}
      <BrowserRouter>

      {/* Provider corresponde a la Api context */}
        <AuthProvider>  
          <Routes>
            <Route path="/" element={<BooksList />} />
            {/* <Route path="booksform" element={<BooksForm />} /> */}
            {/* <Route path="updatebook/:id" element={<BooksForm />} /> */}
            <Route path="*" element={<h1>404 Not Found</h1>} />

          {/* Rutas del login/register */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

          {/* Rutas privadas */}
          {/* Redirige al componente Loginsc SOLAMENTE si esta logeado */}
            <Route path="booksform" element={
            <PrivateRoutes>
              <BooksForm />
            </PrivateRoutes>
            } />

            <Route path="updatebook/:id" element={
              <PrivateRoutes>
                <BooksForm />
              </PrivateRoutes>
            } />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );

    return (
        <div className="min-h-screen w-full bg-gray-200 font-sans">
            {/* <h1 className="text-3xl">Books App</h1> */}

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
