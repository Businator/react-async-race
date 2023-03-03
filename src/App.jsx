import { useEffect, useContext, useCallback, useState } from 'react';
import './App.css';
import { ButtonsOfPagination } from './components/ButtonsOfPagination';
import { CarCreationMenu } from './components/CarCreationMenu';
import { CarList } from './components/CarList';
import { getCars } from './api';
import { Car } from './components/Car';
import { CarContext } from './context/CarContext';

function App() {
  const [isCreateNewCar, setIsCreateNewCar] = useState(false);

  const carContext = useContext(CarContext);

  const getCarsData = useCallback(async () => {
    const { items } = await getCars(1);
    carContext.addCars(items);
  }, [carContext]);

  useEffect(() => {
    getCarsData();
    setIsCreateNewCar(false);
  }, [isCreateNewCar]);

  const carList = carContext.cars.map((car) => {
    return <Car key={car.id} car={car} />;
  });

  return (
    <div className="App">
      <header>
        <button onClick={() => console.log(carContext.selectedCar)}>
          To Garage
        </button>
        <button>To Winners</button>
      </header>
      <main>
        <CarCreationMenu setIsCreateNewCar={setIsCreateNewCar} />
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
