import './App.css';
import Footer from './components/Footer';
// import Player from './components/Player';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
