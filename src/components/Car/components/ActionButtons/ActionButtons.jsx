import { startDriving, stopDriving } from '../../../../utils/workWithDriving';
import styles from './ActionButtons.module.css';

export const ActionButtons = ({ id }) => {
  return (
    <div className={styles.container}>
      <button onClick={async () => await startDriving(id)}>Start</button>
      <button onClick={async () => await stopDriving(id)}>Stop</button>
    </div>
  );
};
