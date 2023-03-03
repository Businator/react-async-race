import { ActionButtons } from './components/ActionButtons';
import { CarImg } from './components/CarImg';
import { ChangeCarButtons } from './components/ChangeCarButtons';
import { Flag } from './components/Flag';

import styles from './Car.module.css';

export const Car = ({ car }) => {
  const { color, name, id } = car;
  return (
    <div>
      <ChangeCarButtons name={name} id={id} />
      <div className={styles.road}>
        <CarImg color={color} id={id} />
        <Flag />
      </div>
      <ActionButtons id={id} />
    </div>
  );
};
