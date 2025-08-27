import './App.css';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Books from './Pages/Books';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { books } from "../data";




function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component = {Home} />
      <Route path="/books" render = {() => <Books books={books} />} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
