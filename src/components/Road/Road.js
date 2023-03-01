import { CarImg } from './components/CarImg';
import { Flag } from './components/Flag';

import styles from './Road.module.css';

export const Road = () => {
  return (
    <div className={styles.container}>
      <CarImg />
      <Flag />
    </div>
  );
};
