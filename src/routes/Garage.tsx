import { useState, useContext, useCallback, useEffect } from 'react';
import { CarContext } from '../context/CarContext';
import { PaginationContext } from '../context/PaginationContext';
import { getCars } from '../api';
import { Car } from '../components/Car';
import { CarCreationMenu } from '../components/CarCreationMenu';
import { ButtonsOfPagination } from '../components/ButtonsOfPagination';
import { ModalWindow } from '../components/ModalWindow';
import { Winner } from '../types';
import { getWinners } from './../api/api';

export const Garage = () => {
  const [winner, setWinner] = useState([] as Winner[]);
  const [modalIsClose, setModalIsClose] = useState(true);

  const paginationContext = useContext(PaginationContext);

  const carContext = useContext(CarContext);

  const getCarsData = useCallback(
    async (page: number) => {
      const { items, count } = await getCars(page);
      const { result } = await getWinners(page);
      carContext.addCars(items);
      carContext.addWinners(result);
      paginationContext.setCount(Number(count));
    },
    [carContext, paginationContext]
  );

  useEffect(() => {
    getCarsData(paginationContext.page);
  }, [paginationContext.page]);

  const carList = carContext.cars.map((car) => {
    return <Car key={car.id} car={car} />;
  });

  const showModal = () => {
    setTimeout(() => {
      setModalIsClose(false);
      setWinner([]);
    }, 3000);
    if (modalIsClose) {
      return <ModalWindow winner={winner[0]} />;
    }
  };

  return (
    <>
      {winner.length >= 1 && showModal()}

      <CarCreationMenu
        setWinner={setWinner}
        setModalIsClose={setModalIsClose}
      />
      <h1>Garage({paginationContext.count})</h1>
      <h2>Page#{paginationContext.page}</h2>
      <ButtonsOfPagination carOnPage={7} context={PaginationContext} />
      {carList}
    </>
  );
};
