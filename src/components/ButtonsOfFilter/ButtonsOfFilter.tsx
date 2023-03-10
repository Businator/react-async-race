import { Winner } from '../../types';

import styles from './ButtonsOfFilter.module.css';

type ButtonsOfFilterTypes = {
  winners: Winner[];
  setWinners: React.Dispatch<React.SetStateAction<Winner[]>>;
};

export const ButtonsOfFilter = ({
  winners,
  setWinners,
}: ButtonsOfFilterTypes) => {
  const sortResult = winners.slice();

  const sortTime = (typeSort: string) => {
    if (typeSort === 'ASC') {
      sortResult.sort((a, b) => b.time - a.time);
      setWinners(sortResult);
    } else {
      sortResult.sort((a, b) => a.time - b.time);
      setWinners(sortResult);
    }
  };

  const sortWins = (typeSort: string) => {
    if (typeSort === 'ASC') {
      sortResult.sort((a, b) => (b.wins as number) - (a.wins as number));
      setWinners(sortResult);
    } else {
      sortResult.sort((a, b) => (a.wins as number) - (b.wins as number));
      setWinners(sortResult);
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
