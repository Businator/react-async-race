import { useState, useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';
import { getCars } from '../../../../api';
import { PaginationContext } from '../../../../context/PaginationContext';

export const CreationForm = () => {
  const [carName, setCarName] = useState('');
  const [carColor, setCarColor] = useState('#000000');

  const carContext = useContext(CarContext);
  const paginationContext = useContext(PaginationContext);

  const submit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await carContext.createCar({
      name: carName,
      color: carColor,
    });
    setCarName('');
    setCarColor('#000000');

    const { items, count } = await getCars(paginationContext.page);
    carContext.addCars(items);
    paginationContext.setCount(Number(count));
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={carName}
        onChange={(event) => setCarName(event.target.value)}
      />
      <input
        type="color"
        value={carColor}
        onChange={(event) => setCarColor(event.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};
