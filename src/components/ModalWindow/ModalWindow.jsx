import { roundNumber } from '../../utils/roundNumber';

import styles from './ModalWindow.module.css';
import { createOrUpdateWinner } from '../../utils/workWithDriving';

export const ModalWindow = ({ winner }) => {
  const { id, name, time } = winner;

  createOrUpdateWinner(id, time);

  return (
    <div className={styles.back}>
      <div className={styles.modal}>
        <h2 className={styles.header}>
          Car #{id} {name} wont first {roundNumber(time)}s!
        </h2>
      </div>
    </div>
  );
};
