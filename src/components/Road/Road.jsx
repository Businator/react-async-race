import { ActionButtons } from './components/ActionButtons';
import { CarImg } from './components/CarImg';
import { ChangeCarButtons } from './components/ChangeCarButtons';
import { Flag } from './components/Flag';

import styles from './Road.module.css';

export const Road = () => {
  return (
    <div>
      <ChangeCarButtons />
      <div className={styles.road}>
        <CarImg />
        <Flag />
      </div>
      <ActionButtons />
    </div>
  );
};
