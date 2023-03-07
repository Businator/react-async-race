import { useState, useContext, useCallback, useEffect } from 'react';
import { CarContext } from '../context/CarContext';
import { PaginationContext } from '../context/PaginationContext';
import { getCars } from '../api';
import { Car } from '../components/Car';
import { CarCreationMenu } from '../components/CarCreationMenu';
import { ButtonsOfPagination } from '../components/ButtonsOfPagination';
import { CarList } from '../components/CarList';
import { ModalWindow } from '../components/ModalWindow';

export const Garage = () => {
  const [winner, setWinner] = useState([]);
  const [modalIsClose, setModalIsClose] = useState(true);
  const [isCreateNewCar, setIsCreateNewCar] = useState(false);
  const [countOnPage, setCountOnPage] = useState(1);

  const paginationContext = useContext(PaginationContext);

  const carContext = useContext(CarContext);

  const getCarsData = useCallback(async () => {
    const { items, count } = await getCars(paginationContext.page);
    carContext.addCars(items);
    setCountOnPage(count);
  }, [carContext, paginationContext]);

  useEffect(() => {
    getCarsData();
    setIsCreateNewCar(false);
  }, [isCreateNewCar]);

  const carList = carContext.cars.map((car) => {
    return (
      <Car
        key={car.id}
        car={car}
        setIsCreateNewCar={setIsCreateNewCar}
        setModalIsClose={setModalIsClose}
      />
    );
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
        setIsCreateNewCar={setIsCreateNewCar}
        setModalIsClose={setModalIsClose}
      />
      <h1>Garage({countOnPage})</h1>
      <h2>Page#{paginationContext.page}</h2>
      <ButtonsOfPagination
        carOnPage={7}
        count={countOnPage}
        setIsUpdatePage={setIsCreateNewCar}
        context={PaginationContext}
      />
      <CarList children={carList} />
    </>
  );
};
