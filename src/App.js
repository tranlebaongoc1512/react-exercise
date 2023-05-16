import './App.css';
import Footer from './components/Footer';
import Player from './components/Player';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;
