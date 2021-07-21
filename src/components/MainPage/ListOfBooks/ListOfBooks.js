import React from "react";
import { useSelector } from "react-redux";
import SearchBook from "./SearchBook/SearchBook";
import Book from "./Book/Book";
import style from "./ListOfBooks.css";
import { getFilterBook } from "../../../redux/selectors/bookSelector";

const ListOfBooks = () => {
  const books = useSelector(getFilterBook);

  return (
    <div>
      <SearchBook />
      <div className={style.listBook}>
        {books.map((elem) => (
          <Book key={elem.id} book={elem} />
        ))}
      </div>
    </div>
  );
};

export default ListOfBooks;
