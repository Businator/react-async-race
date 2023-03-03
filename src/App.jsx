import { useEffect, useContext, useCallback, useState } from 'react';
import './App.css';
import { ButtonsOfPagination } from './components/ButtonsOfPagination';
import { CarCreationMenu } from './components/CarCreationMenu';
import { CarList } from './components/CarList';
import { getCars } from './api';
import { Car } from './components/Car';
import { CarContext } from './context/CarContext';
import { PageContext } from './context/PageContext';

function App() {
  const [isCreateNewCar, setIsCreateNewCar] = useState(false);
  const [countOnPage, setCountOnPage] = useState(1);

  const carContext = useContext(CarContext);
  const pageContext = useContext(PageContext);

  const getCarsData = useCallback(async () => {
    const { items, count } = await getCars(pageContext.page);
    carContext.addCars(items);
    setCountOnPage(count);
  }, [carContext, pageContext]);

  useEffect(() => {
    getCarsData();
    setIsCreateNewCar(false);
  }, [isCreateNewCar]);

  const carList = carContext.cars.map((car) => {
    return <Car key={car.id} car={car} setIsCreateNewCar={setIsCreateNewCar} />;
  });

  return (
    <div className="App">
      <header>
        <button>To Garage</button>
        <button>To Winners</button>
      </header>
      <main>
        <CarCreationMenu setIsCreateNewCar={setIsCreateNewCar} />
        <h2>Garage({countOnPage})</h2>
        <h3>Page#{pageContext.page}</h3>
        <ButtonsOfPagination
          count={countOnPage}
          setIsCreateNewCar={setIsCreateNewCar}
        />
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
