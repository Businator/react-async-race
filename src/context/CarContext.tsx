import { useReducer, createContext } from 'react';
import { createCar, deleteCar, updateCar } from '../api';
import { Car, Winner } from '../types';

type initialStateType = {
  cars: Car[];
  winners: Winner[];
  selectedCar: number;
  isDisabledButtons: boolean;
};

type CarActions = {
  type: string;
  isDisabledButtons: boolean;
  car: Car;
  id: number;
  cars: Car[];
  winners: Winner[];
};

export const CarContext = createContext({
  cars: [] as Car[],
  winners: [] as Winner[],
  selectedCar: 0,
  isDisabledButtons: false,
  addCars: (_cars: Car[]) => {},
  addWinners: (_winners: Winner[]) => {},
  createCar: async (_car: Car) => {},
  removeCar: (_id: number) => {},
  selectCar: (_id: number) => {},
  updateCar: (_id: number, _car: Car) => {},
  generateCars: async (_cars: Car[]) => {},
  disabledButtons: (_isDisabledButtons: boolean) => {},
});

const defaultCarState = {
  cars: [],
  winners: [],
  selectedCar: 0,
  isDisabledButtons: false,
};

const carReducer = (state: initialStateType, action: CarActions) => {
  switch (action.type) {
    case 'ADD_CARS':
      return {
        ...state,
        cars: action.cars,
      };

    case 'ADD_WINNERS':
      return {
        ...state,
        winners: action.winners,
      };

    case 'SELECT_CAR':
      return {
        ...state,
        selectedCar: action.id,
      };

    case 'DELETE_CAR':
      const existingCarIndex = state.cars.findIndex(
        (car) => car.id === action.id
      );
      const existingCar = state.cars[existingCarIndex];

      const updatedCarList = state.cars.filter((car) => car !== existingCar);
      deleteCar(action.id);

      return {
        ...state,
        cars: updatedCarList,
      };

    case 'CREATE_CAR':
      createCar(action.car);
      return {
        ...state,
        cars: state.cars,
      };

    case 'UPDATE_CAR':
      updateCar(action.id, action.car);
      const existingCarIndeUpdate = state.cars.findIndex(
        (car) => car.id === action.id
      );
      const existingCarUpdate = state.cars[existingCarIndeUpdate];

      const updatedCar = {
        ...existingCarUpdate,
        ...action.car,
        id: action.id,
      };

      state.cars.splice(existingCarIndeUpdate, 1, updatedCar);

      return {
        ...state,
        cars: state.cars,
      };

    case 'GENERATE_CARS':
      action.cars.map((car) => createCar(car));
      return {
        ...state,
        cars: state.cars,
      };

    case 'DISABLED_BUTTONS':
      return {
        ...state,
        isDisabledButtons: action.isDisabledButtons,
      };

    default:
      return state;
  }
};

export const CarContextProvider = ({ children }: { children: JSX.Element }) => {
  const [carState, dispatchCarAction] = useReducer<
    React.Reducer<initialStateType, CarActions>
  >(carReducer, defaultCarState);

  const addCarsHandler = (cars: Car[]) => {
    dispatchCarAction({
      type: 'ADD_CARS',
      cars: cars,
      isDisabledButtons: false,
      car: {
        name: '',
        color: '',
        id: undefined,
      },
      id: 0,
      winners: [],
    });
  };

  const addWinnersHandler = (winners: Winner[]) => {
    dispatchCarAction({
      type: 'ADD_WINNERS',
      winners: winners,
      isDisabledButtons: false,
      car: {
        name: '',
        color: '',
        id: undefined,
      },
      id: 0,
      cars: [],
    });
  };

  const createCarHandler = async (car: Car) => {
    dispatchCarAction({
      type: 'CREATE_CAR',
      car: car,
      isDisabledButtons: false,
      id: 0,
      cars: [],
      winners: [],
    });
  };

  const selectCarHandler = (id: number) => {
    dispatchCarAction({
      type: 'SELECT_CAR',
      id: id,
      isDisabledButtons: false,
      car: {
        name: '',
        color: '',
        id: undefined,
      },
      cars: [],
      winners: [],
    });
  };

  const removeCarHandler = (id: number) => {
    dispatchCarAction({
      type: 'DELETE_CAR',
      id: id,
      isDisabledButtons: false,
      car: {
        name: '',
        color: '',
        id: undefined,
      },
      cars: [],
      winners: [],
    });
  };

  const updateCarHandler = (id: number, car: Car) => {
    dispatchCarAction({
      type: 'UPDATE_CAR',
      id: id,
      car: car,
      isDisabledButtons: false,
      cars: [],
      winners: [],
    });
  };

  const generateCarsHandler = async (cars: Car[]) => {
    dispatchCarAction({
      type: 'GENERATE_CARS',
      cars: cars,
      isDisabledButtons: false,
      car: {
        name: '',
        color: '',
        id: undefined,
      },
      id: 0,
      winners: [],
    });
  };

  const disabledButtonsHandler = (isDisabledButtons: boolean) => {
    dispatchCarAction({
      type: 'DISABLED_BUTTONS',
      isDisabledButtons: isDisabledButtons,
      car: {
        name: '',
        color: '',
        id: undefined,
      },
      id: 0,
      cars: [],
      winners: [],
    });
  };

  const carContext = {
    cars: carState.cars,
    winners: carState.winners,
    selectedCar: carState.selectedCar,
    isDisabledButtons: carState.isDisabledButtons,
    addCars: addCarsHandler,
    addWinners: addWinnersHandler,
    createCar: createCarHandler,
    selectCar: selectCarHandler,
    removeCar: removeCarHandler,
    updateCar: updateCarHandler,
    generateCars: generateCarsHandler,
    disabledButtons: disabledButtonsHandler,
  };

  return (
    <CarContext.Provider value={carContext}>{children}</CarContext.Provider>
  );
};
