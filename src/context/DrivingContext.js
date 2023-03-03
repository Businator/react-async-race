import { useReducer, createContext } from 'react';
import { deleteCar } from '../api';

export const CarContext = createContext({
  cars: [],
  selectedCar: 0,
  addCars: () => {},
  createCar: () => {},
});

const defaultCarState = {
  cars: [],
  selectedCar: 0,
};

const carReducer = (state, action) => {
  if (action.type === 'ADD_CARS') {
    return {
      cars: action.cars,
    };
  }

  if (action.type === 'SELECT_CAR') {
    const carId = action.id;

    return {
      ...state,
      selectedCar: carId,
    };
  }

  if (action.type === 'DELETE_CAR') {
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
};

export const CarContextProvider = ({ children }) => {
  const [carState, dispatchCarAction] = useReducer(carReducer, defaultCarState);

  const addCarsHandler = (cars) => {
    dispatchCarAction({
      type: 'ADD_CARS',
      cars: cars,
    });
  };

  const createCarHandler = (car) => {
    dispatchCarAction({
      type: 'CREATE_CAR',
      car: car,
    });
  };

  const carContext = {
    cars: carState.cars,
    selectedCar: carState.selectedCar,
    addCars: addCarsHandler,
    createCar: createCarHandler,
  };

  return (
    <CarContext.Provider value={carContext}>{children}</CarContext.Provider>
  );
};
