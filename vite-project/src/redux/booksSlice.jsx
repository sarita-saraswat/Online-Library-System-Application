import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: '1984', author: 'George Orwell', category: 'fiction', description: 'Dystopian novel', rating: 5 },
    { id: 2, title: 'Dune', author: 'Frank Herbert', category: 'sci-fi', description: 'Sci-fi classic', rating: 4.5 },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: state.books.length ? state.books[state.books.length - 1].id + 1 : 1, // Assign a unique ID
        ...action.payload,
      };
      state.books.push(newBook); // Add the new book to the books array
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
