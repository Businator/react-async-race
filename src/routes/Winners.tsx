import { useEffect, useState, useContext, useCallback } from 'react';
import { getWinners } from '../api';
import { WinnersList } from '../components/WinnersList';
import { ButtonsOfPagination } from '../components/ButtonsOfPagination';
import { ButtonsOfFilter } from '../components/ButtonsOfFilter';
import { Winner } from '../types';
import { PaginationContextForWinnersPage } from '../context/PaginationContextForWinnersPage';

export const Winners = () => {
  const paginationContext = useContext(PaginationContextForWinnersPage);

  const [isUpdatePage, setIsUpdatePage] = useState(false);
  const [winners, setWinners] = useState([] as Winner[]);
  const [countOnPage, setCountOnPage] = useState('');

  const getWinnersData = useCallback(async () => {
    const { result, totalCount } = await getWinners(paginationContext.page);
    paginationContext.setCount(Number(totalCount));
    setWinners(result);
    setCountOnPage(totalCount);
    setIsUpdatePage(false);
  }, [paginationContext, winners]);

  useEffect(() => {
    getWinnersData();
  }, [isUpdatePage]);

  return (
    <>
      <h1>Winners({countOnPage})</h1>
      <h2>Page #{paginationContext.page}</h2>
      <ButtonsOfPagination
        carOnPage={10}
        count={Number(countOnPage)}
        setIsUpdatePage={setIsUpdatePage}
        context={PaginationContextForWinnersPage}
      />
      <ButtonsOfFilter winners={winners} setWinners={setWinners} />
      <WinnersList winners={winners} />
    </>
  );
};
