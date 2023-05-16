import './App.css';
import Footer from './components/Footer';
// import Player from './components/Player';
import Main from './components/Main';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Player/> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
