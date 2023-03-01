import { useState, useEffect } from 'react';
import { getCars } from '../../api';
import { Car } from '../Car/Car';

export const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const carList = [];
    const getCarsData = async () => {
      const { items } = await getCars(1);
      items.map((car) => carList.push(car));
      setCars(carList);
    };
    getCarsData();
  }, []);

  const carList = cars.map((car) => <Car key={car.id} car={car} />);

  return <section>{carList}</section>;
};
