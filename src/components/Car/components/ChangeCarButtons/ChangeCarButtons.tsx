import { useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';
import styles from './ChangeCarButtons.module.css';
import { deleteWinner, getWinner } from '../../../../api';

type ChangeCarButtonsType = {
  name: string;
  id: number;
};

export const ChangeCarButtons = ({ name, id }: ChangeCarButtonsType) => {
  const carContext = useContext(CarContext);

  const deleteCarHandler = async (id: number) => {
    carContext.removeCar(id);
    const { status } = await getWinner(id);
    if (status !== 404) {
      deleteWinner(id);
    }
  };

  return (
    <div className={styles.container}>
      <button
        disabled={carContext.isDisabledButtons}
        onClick={async () => {
          deleteCarHandler(id);
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
