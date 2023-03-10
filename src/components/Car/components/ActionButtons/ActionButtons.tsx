import { useState, useContext } from 'react';
import { startDriving, stopDriving } from '../../../../utils/workWithDriving';
import styles from './ActionButtons.module.css';
import { CarContext } from '../../../../context/CarContext';

export const ActionButtons = ({ id }: { id: number }) => {
  const carContext = useContext(CarContext);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  return (
    <div className={styles.container}>
      <button
        disabled={isDisabledButton && carContext.isDisabledButtons}
        onClick={async () => {
          await startDriving(id);
          setIsDisabledButton(false);
        }}
      >
        Start
      </button>
      <button
        disabled={isDisabledButton && carContext.isDisabledButtons}
        onClick={async () => {
          await stopDriving(id);
          setIsDisabledButton(true);
        }}
      >
        Stop
      </button>
    </div>
  );
};
