import { ActionButtons } from './components/ActionButtons';
import { CreationForm } from './components/CreationForm';
import { UpdateForm } from './components/UpdateForm';

export const CarCreationMenu = ({ setIsCreateNewCar }) => {
  return (
    <div>
      <CreationForm setIsCreateNewCar={setIsCreateNewCar} />
      <UpdateForm />
      <ActionButtons setIsCreateNewCar={setIsCreateNewCar} />
    </div>
  );
};
