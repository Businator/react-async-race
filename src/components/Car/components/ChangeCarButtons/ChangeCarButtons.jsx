import { useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';
import styles from './ChangeCarButtons.module.css';

export const ChangeCarButtons = ({ setIsCreateNewCar, name, id }) => {
  const carContext = useContext(CarContext);

  const deleteCarHandler = (id) => {
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
      <p>{name}</p>
    </div>
  );
};
