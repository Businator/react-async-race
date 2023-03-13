import { CarContext } from '../../context/CarContext';

import styles from './ButtonsOfFilter.module.css';
import { useContext } from 'react';

export const ButtonsOfFilter = () => {
  const carContext = useContext(CarContext);

  const sortResult = carContext.winners.slice();

  const sortTime = (typeSort: string) => {
    if (typeSort === 'ASC') {
      sortResult.sort((a, b) => b.time - a.time);
      carContext.addWinners(sortResult);
    } else {
      sortResult.sort((a, b) => a.time - b.time);
      carContext.addWinners(sortResult);
    }
  };

  const sortWins = (typeSort: string) => {
    if (typeSort === 'ASC') {
      sortResult.sort((a, b) => (b.wins as number) - (a.wins as number));
      carContext.addWinners(sortResult);
    } else {
      sortResult.sort((a, b) => (a.wins as number) - (b.wins as number));
      carContext.addWinners(sortResult);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.buttonsContainer}>
        Sort by: TIME
        <button onClick={() => sortTime('ASC')}>ASC</button>
        <button onClick={() => sortTime('DESC')}>DESC</button>
      </span>
      <span className={styles.buttonsContainer}>
        Sort by: WINS
        <button onClick={() => sortWins('ASC')}>ASC</button>
        <button onClick={() => sortWins('DESC')}>DESC</button>
      </span>
    </div>
  );
};
