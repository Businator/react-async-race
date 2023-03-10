import { useContext } from 'react';
import { generateRandomCars } from '../../../../utils/generateRandomCars';
import { drive, getCars, startEngine } from '../../../../api';
import {
  animationCar,
  getCar,
  stopDriving,
} from '../../../../utils/workWithDriving';
import { PaginationContext } from '../../../../context/PaginationContext';
import { CarContext } from '../../../../context/CarContext';
import { Winner } from '../../../../types';

type ActionButtonsType = {
  setModalIsClose: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<Winner[]>>;
  setIsCreateNewCar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ActionButtons = ({
  setModalIsClose,
  setWinner,
  setIsCreateNewCar,
}: ActionButtonsType) => {
  const carContext = useContext(CarContext);
  const paginationContext = useContext(PaginationContext);

  const generateCars = () => {
    const randomCarsList = generateRandomCars();
    carContext.generateCars(randomCarsList);
    setIsCreateNewCar(true);
  };

  const raceAllCars = async () => {
    const { items } = await getCars(paginationContext.page);

    items.map(async (car) => {
      const { status, result } = await startEngine(car.id as number);
      if (status === 200) {
        const time = result.distance / result.velocity;
        animationCar(getCar(car.id as number), time);
      }
      const driveStatus = await drive(car.id as number);
      if (driveStatus === 500) {
        getCar(car.id as number)
          .getAnimations({ subtree: false })
          .map((anim) => anim.pause());
      }
      if (driveStatus === 200) {
        setWinner((prevState) =>
          prevState.concat({
            id: car.id as number,
            time: result.distance / result.velocity,
            name: car.name,
          })
        );
      }
    });
  };

  const resetAllCars = async () => {
    const { items } = await getCars(paginationContext.page);
    const cars = items.map(async (car) => stopDriving(car.id as number));
    Promise.all(cars);
  };

  return (
    <div>
      <button
        disabled={carContext.isDisabledButtons}
        onClick={async () => {
          await raceAllCars();
          carContext.disabledButtons(true);
        }}
      >
        Race
      </button>
      <button
        disabled={!carContext.isDisabledButtons}
        onClick={async () => {
          await resetAllCars();
          carContext.disabledButtons(false);
          setModalIsClose(true);
        }}
      >
        Reset
      </button>
      <button onClick={generateCars}>Generate Cars</button>
    </div>
  );
};
