import './App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';
import { } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
