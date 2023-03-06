import { useEffect, useState, useContext, useCallback } from 'react';
import { getWinners } from '../api';
import { WinnersList } from '../components/WinnersList';
import { ButtonsOfPagination } from '../components/ButtonsOfPagination';
import { PaginationContext } from '../context/PaginationContext';

export const Winners = () => {
  const paginationContext = useContext(PaginationContext);

  const [isUpdatePage, setIsUpdatePage] = useState(false);
  const [winners, setWinners] = useState([]);
  const [countOnPage, setCountOnPage] = useState();

  const getWinnersData = useCallback(async () => {
    const { result, totalCount } = await getWinners(paginationContext.page);
    paginationContext.setCount(totalCount);
    setWinners(result);
    setCountOnPage(totalCount);
    setIsUpdatePage(false);
  }, [paginationContext]);

  useEffect(() => {
    getWinnersData();
  }, [isUpdatePage]);

  return (
    <>
      <h1>Winners({countOnPage})</h1>
      <h2>Page #{paginationContext.page}</h2>
      <ButtonsOfPagination
        count={countOnPage}
        setIsUpdatePage={setIsUpdatePage}
      />
      <WinnersList winners={winners} />
    </>
  );
};
