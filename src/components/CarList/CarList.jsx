import { useState, useEffect } from 'react';
import { getCars } from '../../api';
import { Car } from '../Car/Car';

export const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCarsData = async () => {
      const { items } = await getCars(1);
      const carsArray = [];
      items.map((car) => carsArray.push(car));
      setCars(carsArray);
    };

    getCarsData();
  }, []);

  return cars.map((car) => (
    <Car key={car.id} color={car.color} name={car.name} id={car.id} />
  ));
};
