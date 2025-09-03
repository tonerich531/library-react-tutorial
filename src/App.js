import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route } from "react-router-dom";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";





function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([ ...cart, book ])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])


  return (
  <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component = {Home} />
      <Route path="/books" exact render = {() => <Books books={books} />} />
      <Route path="/books/:id" render = {() => <BookInfo books={books} addToCart={addToCart} />} />
      <Footer path="/cart" render = {() => <Cart books={books} cart={cart} /> } />
    </div>
  </Router>
  );
}

export default App;
