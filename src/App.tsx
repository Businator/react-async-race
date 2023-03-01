import './App.css';
import { Road } from './components/Road/';

function App() {
  return (
    <div className="App">
      <header>
        <button>To Garage</button>
        <button>To Winners</button>
      </header>
      <main>
        <Road />
      </main>
      <footer>
        <a href="https://github.com/Businator">Businator</a>
      </footer>
    </div>
  );
}

export default App;
