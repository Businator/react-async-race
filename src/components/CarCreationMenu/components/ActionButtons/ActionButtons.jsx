import { useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';
import { generateRandomCars } from '../../../../utils/generateRandomCars';
import { getCars } from '../../../../api';
import { startDriving, stopDriving } from '../../../../utils/workWithDriving';
import { PaginationContext } from '../../../../context/PaginationContext';

export const ActionButtons = ({ setIsCreateNewCar }) => {
  const carContext = useContext(CarContext);
  const paginationContext = useContext(PaginationContext);

  const generateCars = () => {
    const randomCarsList = generateRandomCars();
    carContext.generateCars(randomCarsList);
    setIsCreateNewCar(true);
  };

  const raceAllCars = async () => {
    const { items } = await getCars(paginationContext.page);
    const cars = items.map(async (car) => startDriving(car.id));
    Promise.race(cars);
  };

  const resetAllCars = async () => {
    const { items } = await getCars(paginationContext.page);
    const cars = items.map(async (car) => stopDriving(car.id));
    Promise.all(cars);
  };

  return (
    <div>
      <button
        onClick={async () => {
          await raceAllCars();
          carContext.disabledButtons(true);
        }}
      >
        Race
      </button>
      <button
        onClick={async () => {
          await resetAllCars();
          carContext.disabledButtons(false);
        }}
      >
        Reset
      </button>
      <button onClick={generateCars}>Generate Cars</button>
    </div>
  );
};
