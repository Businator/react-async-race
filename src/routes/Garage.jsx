import { useState, useContext, useCallback, useEffect } from 'react';
import { CarContext } from '../context/CarContext';
import { PageContext } from '../context/PageContext';
import { getCars } from '../api';
import { Car } from '../components/Car';
import { CarCreationMenu } from '../components/CarCreationMenu';
import { ButtonsOfPagination } from '../components/ButtonsOfPagination';
import { CarList } from '../components/CarList';

export const Garage = () => {
  const [isCreateNewCar, setIsCreateNewCar] = useState(false);
  const [countOnPage, setCountOnPage] = useState(1);

  const carContext = useContext(CarContext);
  const pageContext = useContext(PageContext);

  const getCarsData = useCallback(async () => {
    const { items, count } = await getCars(pageContext.page);
    carContext.addCars(items);
    setCountOnPage(count);
  }, [carContext, pageContext]);

  useEffect(() => {
    getCarsData();
    setIsCreateNewCar(false);
  }, [isCreateNewCar]);

  const carList = carContext.cars.map((car) => {
    return <Car key={car.id} car={car} setIsCreateNewCar={setIsCreateNewCar} />;
  });

  return (
    <>
      <CarCreationMenu setIsCreateNewCar={setIsCreateNewCar} />
      <h2>Garage({countOnPage})</h2>
      <h3>Page#{pageContext.page}</h3>
      <ButtonsOfPagination
        count={countOnPage}
        setIsCreateNewCar={setIsCreateNewCar}
      />
      <CarList children={carList} />
    </>
  );
};
