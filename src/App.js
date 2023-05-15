import './App.css';
import Footer from './Footer';
import Player from './Player';
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
