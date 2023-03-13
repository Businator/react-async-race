import { WinnerCar } from '../WinnerCar';
import { useContext } from 'react';
import { CarContext } from './../../context/CarContext';

export const WinnersList = () => {
  const carContext = useContext(CarContext);

  const winnersList = carContext.winners.map((winner, index) => (
    <WinnerCar
      key={winner.id}
      id={winner.id}
      wins={winner.wins as number}
      time={winner.time}
      index={index}
    />
  ));

  return <ul>{winnersList}</ul>;
};
