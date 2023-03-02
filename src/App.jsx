import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { ButtonsOfPagination } from './components/ButtonsOfPagination';
import { CarCreationMenu } from './components/CarCreationMenu';
import { CarList } from './components/CarList';
import { getCars } from './api';
import { Car } from './components/Car';

function App() {
  const [selectedCar, setSelectedCar] = useState();
  const [cars, setCars] = useState([]);

  const getCarsData = useCallback(async () => {
    const carList = [];
    const { items } = await getCars(1);
    items.map((car) => carList.push(car));
    setCars(carList);
  }, []);

  useEffect(() => {
    getCarsData();
  }, [getCarsData]);

  const carList = cars.map((car) => (
    <Car key={car.id} car={car} setSelectedCar={setSelectedCar} />
  ));

  return (
    <div className="App">
      <header>
        <button>To Garage</button>
        <button>To Winners</button>
      </header>
      <main>
        <CarCreationMenu selectedCar={selectedCar} />
        <h2>Garage(4)</h2>
        <h3>Page#1</h3>
        <ButtonsOfPagination />
        <CarList children={carList} />
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
