import { useState, useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';

export const CreationForm = () => {
  const [carName, setCarName] = useState('');
  const [carColor, setCarColor] = useState('#000000');

  const carContext = useContext(CarContext);

  const submit = (event) => {
    event.preventDefault();
    carContext.createCar({
      name: carName,
      color: carColor,
    });
    setCarName('');
    setCarColor('#000000');
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
