import { Winner } from '../../types';
import { ActionButtons } from './components/ActionButtons';
import { CreationForm } from './components/CreationForm';
import { UpdateForm } from './components/UpdateForm';

type CarCreationMenuType = {
  setModalIsClose: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<Winner[]>>;
  setIsCreateNewCar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CarCreationMenu = ({
  setModalIsClose,
  setWinner,
  setIsCreateNewCar,
}: CarCreationMenuType) => {
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
