import { useEffect, useState, useContext, useCallback } from 'react';
import { getWinners } from '../api';
import { WinnersList } from '../components/WinnersList';
import { ButtonsOfPagination } from '../components/ButtonsOfPagination';
import { ButtonsOfFilter } from '../components/ButtonsOfFilter';
import { PaginationContextForWinnersPage } from '../context/PaginationContextForWinnersPage';
import { CarContext } from './../context/CarContext';

export const Winners = () => {
  const paginationContext = useContext(PaginationContextForWinnersPage);
  const carContext = useContext(CarContext);

  const getWinnersData = useCallback(
    async (page: number) => {
      const { result, totalCount } = await getWinners(page);
      paginationContext.setCount(Number(totalCount));
      carContext.addWinners(result);
    },
    [carContext, paginationContext]
  );

  useEffect(() => {
    getWinnersData(paginationContext.page);
  }, [paginationContext.page]);

  return (
    <>
      <h1>Winners({paginationContext.count})</h1>
      <h2>Page #{paginationContext.page}</h2>
      <ButtonsOfPagination
        carOnPage={10}
        context={PaginationContextForWinnersPage}
      />
      <ButtonsOfFilter />
      <WinnersList />
    </>
  );
};
