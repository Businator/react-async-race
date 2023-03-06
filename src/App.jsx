import { Outlet, NavLink, useNavigation } from 'react-router-dom';

import './App.css';

function App() {
  const navigation = useNavigation();

  return (
    <div className="App">
      <header>
        <NavLink to={'garage'}>To Garage</NavLink>
        <NavLink to={'winners'}>To Winners</NavLink>
      </header>
      <main>
        <div
          id="detail"
          className={navigation.state === 'loading' ? 'loading' : ''}
        >
          <Outlet />
        </div>
      </main>
      <footer>
        <a href="https://github.com/Businator" target="_blank" rel="noreferrer">
          Businator
        </a>
      </footer>
    </div>
  );
}

export default App;
