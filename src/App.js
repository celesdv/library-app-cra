import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksForm from "./components/BooksForm";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";

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
            <Route
              path="booksform"
              element={
                <PrivateRoutes>
                  <BooksForm />
                </PrivateRoutes>
              }
            />

            <Route
              path="updatebook/:id"
              element={
                <PrivateRoutes>
                  <BooksForm />
                </PrivateRoutes>
              }
            />

            <Route path="details/:id" element={<BookDetails />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
