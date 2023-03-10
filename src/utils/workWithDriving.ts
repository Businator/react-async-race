import {
  createWinner,
  drive,
  getWinner,
  startEngine,
  stopEngine,
  updateWinner,
} from '../api';
import { roundNumber } from './roundNumber';

export const createOrUpdateWinner = async (id: number, time: number) => {
  const { status, result } = await getWinner(id);
  if (status === 404) {
    createWinner({ id, wins: 1, time: roundNumber(time) });
  } else if (status === 200 && result.time > roundNumber(time)) {
    updateWinner({
      id,
      wins: (result.wins as number) + 1,
      time: roundNumber(time),
    });
  }
};

export const getCar = (id: number): HTMLElement => {
  return document.querySelector(`[datatype = 'car${id}']`) as HTMLElement;
};

export const animationCar = (car: HTMLElement, time: number) => {
  const carWidth = car.getBoundingClientRect().width;
  const animation = car.animate(
    [{ left: '0%' }, { left: `calc(100% - ${carWidth}px)` }],
    {
      duration: time,
      easing: 'ease-out',
    }
  );
  animation.play();
  animation.onfinish = async () => {
    car.style.left = `calc(100% - ${carWidth}px)`;
  };
};

const switchToDriveMode = async (id: number) => {
  const status = await drive(id);
  if (status === 500) {
    getCar(id)!
      .getAnimations({ subtree: false })
      .map((anim) => anim.pause());
  }
};

export const startDriving = async (id: number) => {
  const { status, result } = await startEngine(id);
  if (status === 200) {
    const time = result.distance / result.velocity;
    switchToDriveMode(id);
    animationCar(getCar(id), time);
  }
};

export const stopDriving = async (id: number) => {
  const { status } = await stopEngine(id);
  if (status === 200) {
    getCar(id)!
      .getAnimations()
      .map((anim) => anim.cancel());
    getCar(id).style.left = '0%';
  }
};
