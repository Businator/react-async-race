import { useState } from 'react';
import { updateCar } from '../../../../api';

export const UpdateForm = ({ selectedCar }) => {
  const [carName, setCarName] = useState('');
  const [carColor, setCarColor] = useState('#000000');

  const submit = (event) => {
    event.preventDefault();
    updateCar(selectedCar, { name: carName, color: carColor });
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
      <button type="submit">Update</button>
    </form>
  );
};
