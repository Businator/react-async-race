import { useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';
import { generateRandomCars } from '../../../../utils/generateRandomCars';
import { getCars } from '../../../../api';
import { startDriving, stopDriving } from '../../../../utils/workWithDriving';
import { PageContext } from '../../../../context/PageContext';

export const ActionButtons = ({ setIsCreateNewCar }) => {
  const carContext = useContext(CarContext);
  const pageContext = useContext(PageContext);

  const generateCars = () => {
    const randomCarsList = generateRandomCars();
    carContext.generateCars(randomCarsList);
    setIsCreateNewCar(true);
  };

  const raceAllCars = async () => {
    const { items } = await getCars(pageContext.page);
    const cars = items.map(async (car) => startDriving(car.id));
    Promise.race(cars);
  };

  const resetAllCars = async () => {
    const { items } = await getCars(pageContext.page);
    const cars = items.map(async (car) => stopDriving(car.id));
    Promise.all(cars);
  };

  return (
    <div>
      <button onClick={async () => await raceAllCars()}>Race</button>
      <button onClick={async () => await resetAllCars()}>Reset</button>
      <button onClick={generateCars}>Generate Cars</button>
    </div>
  );
};
