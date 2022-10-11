import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: "2008",
        image: "https://drive.google.com/uc?export=view&id=1B6mKamPkhbhU8xDfovVrFsTMi3S_Q5zT",
        description:
            "Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.",
        ISBN: "9780132350884",
    },
    {
        id: "2",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: "2008",
        image: "https://drive.google.com/uc?export=view&id=1B6mKamPkhbhU8xDfovVrFsTMi3S_Q5zT",
        description:
            "Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.",
        ISBN: "9780132350884",
    },
    {
        id: "3",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: "2008",
        image: "https://drive.google.com/uc?export=view&id=1B6mKamPkhbhU8xDfovVrFsTMi3S_Q5zT",
        description:
            "Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.",
        ISBN: "9780132350884",
    },
    {
        id: "4",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: "2008",
        image: "https://drive.google.com/uc?export=view&id=1B6mKamPkhbhU8xDfovVrFsTMi3S_Q5zT",
        description:
            "Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.",
        ISBN: "9780132350884",
    },
    {
        id: "5",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: "2008",
        image: "https://drive.google.com/uc?export=view&id=1B6mKamPkhbhU8xDfovVrFsTMi3S_Q5zT",
        description:
            "Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.",
        ISBN: "9780132350884",
    },
    {
        id: "6",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: "2008",
        image: "https://drive.google.com/uc?export=view&id=1B6mKamPkhbhU8xDfovVrFsTMi3S_Q5zT",
        description:
            "Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.",
        ISBN: "9780132350884",
    },
    {
        id: "7",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: "2008",
        image: "https://drive.google.com/uc?export=view&id=1B6mKamPkhbhU8xDfovVrFsTMi3S_Q5zT",
        description:
            "Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.",
        ISBN: "9780132350884",
    },
    {
        id: "8",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: "2008",
        image: "https://drive.google.com/uc?export=view&id=1B6mKamPkhbhU8xDfovVrFsTMi3S_Q5zT",
        description:
            "Code is clean if it can be understood easily by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.",
        ISBN: "9780132350884",
    },
];

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state, action) => {
            // console.log(state, action);
            state.push(action.payload);
        },
        updatebook: (state, action) => {
            const { id, title, author, year, ISBN, image, description } =
                action.payload;
            const foundBook = state.find((book) => book.id === id);
            if (foundBook) {
                foundBook.title = title;
                foundBook.author = author;
                foundBook.year = year;
                foundBook.ISBN = ISBN;
                foundBook.image = image;
                foundBook.description = description;
            }
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
        },
    },
});

export const { addBook, updatebook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
