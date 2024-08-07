import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: {
    items: [],
    status: 'idle',
    error: null,
  },
  filters: {
    sort: 'ASC',
  },
};

const allDataSlice = createSlice({
  name: 'allData',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books.items = action.payload;
      state.books.status = 'succeeded';
    },
    setBooksLoading: (state) => {
      state.books.status = 'loading';
    },
    setBooksError: (state, action) => {
      state.books.status = 'failed';
      state.books.error = action.payload;
    },
    setSortOrder: (state, action) => {
      state.filters.sort = action.payload;
    },
    editBook: (state, action) => {
      const index = state.books.items.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books.items[index] = action.payload;
      }
    },
  },
});

export const {
  setBooks,
  setBooksLoading,
  setBooksError,
  setSortOrder,
  editBook
} = allDataSlice.actions;

export default allDataSlice.reducer;