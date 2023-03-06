import { WinnerCar } from '../WinnerCar';

export const WinnersList = ({ winners }) => {
  const winnersList = winners.map((winner) => (
    <WinnerCar
      key={winner.id}
      id={winner.id}
      wins={winner.wins}
      time={winner.time}
    />
  ));

  return <ul>{winnersList}</ul>;
};
