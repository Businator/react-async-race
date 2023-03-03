import { useState } from 'react';
import { drive, startEngine, stopEngine } from '../../../../api';
import styles from './ActionButtons.module.css';

export const ActionButtons = ({ id }) => {
  const getCar = (id) => {
    return document.querySelector(`[datatype = 'car${id}']`);
  };

  const animationCar = (car, time) => {
    const carWidth = car.getBoundingClientRect().width;
    const animation = car.animate(
      [{ left: '0%' }, { left: `calc(100% - ${carWidth}px)` }],
      {
        duration: time,
        easing: 'ease-out',
      }
    );
    animation.play();
    animation.onfinish = () => {
      car.style.left = `calc(100% - ${carWidth}px)`;
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

  const startDriving = async (id) => {
    const { status, result } = await startEngine(id);
    if (status === 200) {
      const time = result.distance / result.velocity;
      switchToDriveMode(id);
      animationCar(getCar(id), time);
    }
  };

  const stopDriving = async (id) => {
    const { status } = await stopEngine(id);
    if (status === 200) {
      getCar(id)
        .getAnimations()
        .map((anim) => anim.cancel());
      getCar(id).style.left = '0%';
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={async () => await startDriving(id)}>Start</button>
      <button onClick={async () => await stopDriving(id)}>Stop</button>
    </div>
  );
};
