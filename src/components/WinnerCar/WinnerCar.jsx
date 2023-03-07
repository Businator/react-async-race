import { useState, useEffect, useCallback } from 'react';
import { deleteWinner, getCar } from '../../api';
import { CarImg } from '../CarImg';

import styles from './WinnersCar.module.css';

export const WinnerCar = ({ id, wins, time, index }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const getCarData = useCallback(async () => {
    const { result, status } = await getCar(id);
    if (status === 404) {
      await deleteWinner(id);
    } else {
      const { name, color } = result;
      setName(name);
      setColor(color);
    }
  }, [id]);

  useEffect(() => {
    getCarData();
  }, [getCarData]);

  return (
    <li>
      <span className={styles.positionInTable}>№{index + 1}</span>
      <span className={styles.car}>
        <CarImg color={color} id={id} />
      </span>
      <span className={styles.name}>{name}</span>
      <span className={styles.wins}>Wins: {wins}</span>
      <span className={styles.time}>Time: {time}</span>
    </li>
  );
};
