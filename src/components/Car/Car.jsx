import { ActionButtons } from './components/ActionButtons';
import { ChangeCarButtons } from './components/ChangeCarButtons';
import { Flag } from './components/Flag';

import styles from './Car.module.css';
import { CarImg } from '../CarImg';

export const Car = ({ car, setIsCreateNewCar }) => {
  const { color, name, id } = car;
  return (
    <div>
      <ChangeCarButtons
        setIsCreateNewCar={setIsCreateNewCar}
        name={name}
        id={id}
      />
      <div className={styles.road}>
        <CarImg color={color} id={id} />
        <Flag />
      </div>
      <ActionButtons id={id} />
    </div>
  );
};
