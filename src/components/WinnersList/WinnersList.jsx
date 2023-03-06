import { WinnerCar } from '../WinnerCar';

export const WinnersList = ({ winners }) => {
  const winnersList = winners.map((winner, index) => (
    <WinnerCar
      key={winner.id}
      id={winner.id}
      wins={winner.wins}
      time={winner.time}
      index={index}
    />
  ));

  return <ul>{winnersList}</ul>;
};
