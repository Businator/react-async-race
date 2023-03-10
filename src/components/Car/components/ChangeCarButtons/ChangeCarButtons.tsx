import { useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';
import styles from './ChangeCarButtons.module.css';

type ChangeCarButtonsType = {
  setIsCreateNewCar: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  id: number;
};

export const ChangeCarButtons = ({
  setIsCreateNewCar,
  name,
  id,
}: ChangeCarButtonsType) => {
  const carContext = useContext(CarContext);

  const deleteCarHandler = (id: number) => {
    carContext.removeCar(id);
  };

  return (
    <div className={styles.container}>
      <button
        disabled={carContext.isDisabledButtons}
        onClick={async () => {
          deleteCarHandler(id);
          setIsCreateNewCar(true);
        }}
      >
        Delete
      </button>
      <button
        disabled={carContext.isDisabledButtons}
        onClick={() => {
          carContext.selectCar(id);
        }}
      >
        Select
      </button>
      <p className={styles.name}>{name}</p>
    </div>
  );
};
