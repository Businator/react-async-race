import { ActionButtons } from './components/ActionButtons';
import { CreationForm } from './components/CreationForm';
import { UpdateForm } from './components/UpdateForm';

export const CarCreationMenu = ({
  setModalIsClose,
  setWinner,
  setIsCreateNewCar,
}) => {
  return (
    <div>
      <CreationForm setIsCreateNewCar={setIsCreateNewCar} />
      <UpdateForm />
      <ActionButtons
        setModalIsClose={setModalIsClose}
        setWinner={setWinner}
        setIsCreateNewCar={setIsCreateNewCar}
      />
    </div>
  );
};
