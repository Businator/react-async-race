import styles from './ButtonsOfFilter.module.css';

export const ButtonsOfFilter = ({ winners, setWinners }) => {
  const sortResult = winners.slice();

  const sortTime = (typeSort) => {
    if (typeSort === 'ASC') {
      sortResult.sort((a, b) => b.time - a.time);
      setWinners(sortResult);
    } else {
      sortResult.sort((a, b) => a.time - b.time);
      setWinners(sortResult);
    }
  };

  const sortWins = (typeSort) => {
    if (typeSort === 'ASC') {
      sortResult.sort((a, b) => b.wins - a.wins);
      setWinners(sortResult);
    } else {
      sortResult.sort((a, b) => a.wins - b.wins);
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
