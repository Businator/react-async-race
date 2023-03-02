import { useReducer, createContext } from 'react';
import { deleteCar, updateCar } from '../api';

export const CarContext = createContext({
  cars: [],
  selectedCar: 0,
  addCars: (car) => {},
  removeCar: (id) => {},
  selectCar: (id) => {},
  updateCar: (id, car) => {},
});

const defaultCarState = {
  cars: [],
  selectedCar: 0,
};

const carReducer = (state, action) => {
  if (action.type === 'ADD_CARS') {
    const carList = [...action.cars];

    return {
      cars: carList,
    };
  }

  if (action.type === 'SELECT_CAR') {
    const carId = action.id;

    return {
      ...state,
      selectedCar: carId,
    };
  }

  if (action.type === 'REMOVE_CAR') {
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
};

export const CarContextProvider = ({ children }) => {
  const [carState, dispatchCarAction] = useReducer(carReducer, defaultCarState);

  const addCarsHandler = (cars) => {
    dispatchCarAction({
      type: 'ADD_CARS',
      cars: cars,
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
      type: 'REMOVE_CAR',
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

  const carContext = {
    cars: carState.cars,
    selectedCar: carState.selectedCar,
    addCars: addCarsHandler,
    selectCar: selectCarHandler,
    removeCar: removeCarHandler,
    updateCar: updateCarHandler,
  };

  return (
    <CarContext.Provider value={carContext}>{children}</CarContext.Provider>
  );
};
