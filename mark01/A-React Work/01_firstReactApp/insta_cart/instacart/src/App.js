import Navbar from './component/Nav/Navbar';
import Header from './component/Header/Header';
import './CSS/App.css';
import HomePage from './component/Homepage/homepage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Header />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
