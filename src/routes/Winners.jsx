import { useEffect, useState } from 'react';
import { getWinners } from '../api';
import { WinnersList } from '../components/WinnersList';

export const Winners = () => {
  const [winners, setWinners] = useState([]);
  const [count, setCount] = useState();

  const getWinnersData = async () => {
    const { result, totalCount } = await getWinners(1);
    setWinners(result);
    setCount(totalCount);
  };

  useEffect(() => {
    getWinnersData();
  }, []);

  return (
    <>
      <h1>Winners({count})</h1>
      <h2>Page #1</h2>
      <WinnersList winners={winners} />
    </>
  );
};
