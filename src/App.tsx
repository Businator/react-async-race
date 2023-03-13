import { Outlet, NavLink } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to={'garage'}>To Garage</NavLink>
        <NavLink to={'winners'}>To Winners</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="https://github.com/Businator" target="_blank" rel="noreferrer">
          Businator
        </a>
        <a
          href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/async-race.md"
          target="_blank"
          rel="noreferrer"
        >
          Task
        </a>
      </footer>
    </div>
  );
}

export default App;
