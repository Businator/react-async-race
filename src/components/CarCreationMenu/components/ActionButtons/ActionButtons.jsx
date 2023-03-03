import { useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';
import { generateRandomCars } from '../../../../utils/generateRandomCars';

export const ActionButtons = ({ setIsCreateNewCar }) => {
  const carContext = useContext(CarContext);

  const generateCars = () => {
    const randomCarsList = generateRandomCars();
    carContext.generateCars(randomCarsList);
    setIsCreateNewCar(true);
  };

  return (
    <div>
      <button>Race</button>
      <button>Reset</button>
      <button onClick={generateCars}>Generate Cars</button>
    </div>
  );
};
