import { useReducer, createContext } from 'react';
import { deleteCar, updateCar } from '../api';

export const CarContext = createContext({
  cars: [],
  addCars: (car) => {},
  removeCar: (id) => {},
  updateCar: (id, car) => {},
});

const defaultCarState = {
  cars: [],
};

const carReducer = (state, action) => {
  if (action.type === 'ADD_ITEMS') {
    const carList = [...action.cars];

    return {
      cars: carList,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCarIndex = state.cars.findIndex(
      (car) => car.id === action.id
    );
    const existingCar = state.cars[existingCarIndex];

    const updatedCarList = state.cars.filter((car) => car !== existingCar);
    deleteCar(action.id);

    return {
      cars: updatedCarList,
    };
  }

  if (action.type === 'UPDATE_ITEM') {
    updateCar(action.id, action.car);

    const existingCarIndex = state.cars.findIndex(
      (car) => car.id === action.id
    );

    const existingCar = state.cars[existingCarIndex];

    const updatedCar = {
      ...existingCar,
      id: action.id,
      ...action.car,
    };

    state.cars.splice(existingCarIndex, 1, updatedCar);

    return {
      cars: state.cars,
    };
  }
};

export const CarContextProvider = ({ children }) => {
  const [carState, dispatchCarAction] = useReducer(carReducer, defaultCarState);

  const addCarsHandler = (cars) => {
    dispatchCarAction({
      type: 'ADD_ITEMS',
      cars: cars,
    });
  };

  const removeCarHandler = (id) => {
    dispatchCarAction({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };
  const updateCarHandler = (id, car) => {
    dispatchCarAction({
      type: 'UPDATE_ITEM',
      id: id,
      car: car,
    });
  };

  const carContext = {
    cars: carState.cars,
    addCars: addCarsHandler,
    removeCar: removeCarHandler,
    updateCar: updateCarHandler,
  };

  return (
    <CarContext.Provider value={carContext}>{children}</CarContext.Provider>
  );
};
