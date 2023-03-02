import { useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';
import styles from './ChangeCarButtons.module.css';

export const ChangeCarButtons = ({ name, id, setSelectedCar }) => {
  const carContext = useContext(CarContext);

  const deleteCarHandler = (id) => {
    carContext.removeCar(id);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={async () => {
          deleteCarHandler(id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setSelectedCar(id);
        }}
      >
        Select
      </button>
      <p>{name}</p>
    </div>
  );
};
