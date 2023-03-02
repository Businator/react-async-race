import { ActionButtons } from './components/ActionButtons';
import { CreationForm } from './components/CreationForm';
import { UpdateForm } from './components/UpdateForm';

export const CarCreationMenu = ({ selectedCar }) => {
  return (
    <div>
      <CreationForm />
      <UpdateForm selectedCar={selectedCar} />
      <ActionButtons />
    </div>
  );
};
