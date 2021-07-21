import { createSlice } from "@reduxjs/toolkit";
import { defaultListOfBook } from "./defaultListOfBook";

const defaultState = {
  listOfBook: defaultListOfBook,
  searchFilter: "",
};

export const bookSlicer = createSlice({
  name: "listOfBook",
  initialState: defaultState,
  reducers: {
    addBook(state, action) {
      return {
        ...state,
        listOfBook: state.listOfBook.concat(action.payload),
      };
    },
    changeFilter(state, action) {
      return {
        ...state,
        searchFilter: action.payload,
      };
    },
    addDescription(state, action) {
      const { id, description } = action.payload;
      const newListOfBook = state.listOfBook.map((book) => {
        if (id === book.id.toString()) {
          return { ...book, description };
        }
        return { ...book };
      });
      return {
        ...state,
        listOfBook: newListOfBook,
      };
    },
    deleteBook(state, action) {
      const newListWithDeletedBook = state.listOfBook.filter(
        (book) => book.id !== action.payload
      );
      return {
        ...state,
        listOfBook: newListWithDeletedBook,
      };
    },
    startEditedBook(state, action) {
      const newListOfBook = state.listOfBook.map((book) => {
        if (action.payload === book.id) {
          return { ...book, edited: true };
        }
        return { ...book };
      });
      return {
        ...state,
        listOfBook: newListOfBook,
      };
    },
    endEditedBook(state, action) {
      const { id, name, author, year, description } = action.payload;
      const newListOfBook = state.listOfBook.map((book) => {
        if (id === book.id) {
          return { ...book, name, author, year, edited: false, description };
        }
        return { ...book };
      });
      return {
        ...state,
        listOfBook: newListOfBook,
      };
    },
  },
});

const { actions, reducer } = bookSlicer;

export const {
  addBook,
  changeFilter,
  addDescription,
  deleteBook,
  startEditedBook,
  endEditedBook,
} = actions;

export default reducer;
