import logo from './logo.svg';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div>
    <Home/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This app is in development, keep checking in to monitor progress
        </p>
      </header>
    </div>
    </div>
  );
}

export default App;
