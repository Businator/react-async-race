import {
  createWinner,
  drive,
  getWinner,
  startEngine,
  stopEngine,
  updateWinner,
} from '../api';
import { roundNumber } from './roundNumber';

const raceParticipants = [];

const createOrUpdateWinner = async ({ id, time }) => {
  const { result, status } = await getWinner(id);
  if (status === 404) {
    createWinner({ id, wins: 1, time: roundNumber(time) });
  } else if (status === 200 && result.time > roundNumber(time)) {
    updateWinner({ id, wins: result.wins + 1, time: roundNumber(time) });
  }
};

const getCar = (id) => {
  return document.querySelector(`[datatype = 'car${id}']`);
};

const animationCar = (id, car, time) => {
  const carWidth = car.getBoundingClientRect().width;
  const animation = car.animate(
    [{ left: '0%' }, { left: `calc(100% - ${carWidth}px)` }],
    {
      duration: time,
      easing: 'ease-out',
    }
  );
  raceParticipants.length = 0;
  animation.play();
  animation.onfinish = async () => {
    car.style.left = `calc(100% - ${carWidth}px)`;
    raceParticipants.push({ id, time });
    await createOrUpdateWinner(raceParticipants[0]);
  };
};

const switchToDriveMode = async (id) => {
  const status = await drive(id);
  if (status === 500) {
    getCar(id)
      .getAnimations({ subtree: false })
      .map((anim) => anim.pause());
  }
};

export const startDriving = async (id) => {
  const { status, result } = await startEngine(id);
  if (status === 200) {
    const time = result.distance / result.velocity;
    switchToDriveMode(id);
    animationCar(id, getCar(id), time);
  }
};

export const stopDriving = async (id) => {
  const { status } = await stopEngine(id);
  if (status === 200) {
    getCar(id)
      .getAnimations()
      .map((anim) => anim.cancel());
    getCar(id).style.left = '0%';
  }
};
