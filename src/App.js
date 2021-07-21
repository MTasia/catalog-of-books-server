import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import MainPage from "./components/MainPage/MainPage";
import BooksDescription from "./components/BooksDescription/BooksDescription";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MainPage} />
      <Route path="/items" exact component={MainPage} />
      <Route path="/items/:id" exact component={BooksDescription} />
    </BrowserRouter>
  );
}

export default App;
