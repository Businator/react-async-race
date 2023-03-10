import { Winner } from '../../types';
import { WinnerCar } from '../WinnerCar';

export const WinnersList = ({ winners }: { winners: Winner[] }) => {
  const winnersList = winners.map((winner, index) => (
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
