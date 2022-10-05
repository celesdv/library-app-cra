import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    year: "2008",
    image: "",
    description: "Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.",
    ISBN: "9780132350884"
  }
];

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

// export const {} = bookSlice.actions

export default bookSlice.reducer;



/* o Título
o Autor/a/es/as
o Año de publicación
o Una imagen para la portada
o Una descripción o reseña del contenido
o ISBN (Si se encuentra disponible) – Opcional */