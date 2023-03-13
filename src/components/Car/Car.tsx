import { ActionButtons } from './components/ActionButtons';
import { ChangeCarButtons } from './components/ChangeCarButtons';
import { Flag } from './components/Flag';

import styles from './Car.module.css';
import { CarImg } from '../CarImg';
import { Car as CarType } from '../../types';

type CarTypes = {
  car: CarType;
};

export const Car = ({ car }: CarTypes) => {
  const { color, name, id } = car;
  return (
    <div>
      <ChangeCarButtons name={name} id={id as number} />
      <div className={styles.road}>
        <CarImg color={color} id={id as number} />
        <Flag />
      </div>
      <ActionButtons id={id as number} />
    </div>
  );
};
