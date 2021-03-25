import logo from './logo.svg';
import dockerlogo from './docker1.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dockerlogo} className="App-logo" alt="logo" />
        <p>
          DevOps with Docker MOOC 2021 excercise 3.1.
        </p>
        <a
          className="App-link"
          href="https://github.com/Harjuko/Devops-MOOC-React"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kristian Harju
        </a>
      </header>
    </div>
  );
}

export default App;
