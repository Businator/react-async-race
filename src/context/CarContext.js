import { useReducer, createContext } from 'react';
import { createCar, deleteCar, deleteWinner, updateCar } from '../api';

export const CarContext = createContext({
  cars: [],
  selectedCar: 0,
  addCars: () => {},
  createCar: () => {},
  removeCar: () => {},
  selectCar: () => {},
  updateCar: () => {},
  generateCars: () => {},
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
    deleteWinner(action.id);

    return {
      cars: updatedCarList,
    };
  }

  if (action.type === 'CREATE_CAR') {
    createCar(action.car);

    return {
      cars: state.cars,
    };
  }

  if (action.type === 'UPDATE_CAR') {
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

  if (action.type === 'GENERATE_CARS') {
    const newCarsList = action.cars;

    newCarsList.map((car) => createCar(car));

    return {
      cars: state.cars,
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

  const selectCarHandler = (id) => {
    dispatchCarAction({
      type: 'SELECT_CAR',
      id: id,
    });
  };

  const removeCarHandler = (id) => {
    dispatchCarAction({
      type: 'DELETE_CAR',
      id: id,
    });
  };

  const updateCarHandler = (id, car) => {
    dispatchCarAction({
      type: 'UPDATE_CAR',
      id: id,
      car: car,
    });
  };

  const generateCarsHandler = (cars) => {
    dispatchCarAction({
      type: 'GENERATE_CARS',
      cars: cars,
    });
  };

  const carContext = {
    cars: carState.cars,
    selectedCar: carState.selectedCar,
    addCars: addCarsHandler,
    createCar: createCarHandler,
    selectCar: selectCarHandler,
    removeCar: removeCarHandler,
    updateCar: updateCarHandler,
    generateCars: generateCarsHandler,
  };

  return (
    <CarContext.Provider value={carContext}>{children}</CarContext.Provider>
  );
};
