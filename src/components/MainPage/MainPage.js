import React from "react";
import ListOfBooks from "./ListOfBooks/ListOfBooks";
import Header from "./Header/Header";
import AddBook from "./AddBook/AddBook";
import Footer from "./Footer/Footer";

const MainPage = () => (
  <div>
    <Header />
    <div className="content">
      <AddBook />
      <ListOfBooks />
    </div>
    <Footer />
  </div>
);

export default MainPage;
