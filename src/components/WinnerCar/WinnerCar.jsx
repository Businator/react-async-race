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
    <li className={styles.li}>
      <span>№{index + 1}</span>
      <CarImg color={color} id={id} />
      <span>{name}</span>
      <span>Wins: {wins}</span>
      <span>Time: {time}</span>
    </li>
  );
};
