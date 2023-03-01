import { ActionButtons } from './components/ActionButtons';
import { CreationForm } from './components/CreationForm';
import { UpdateForm } from './components/UpdateForm';

export const CarCreationMenu = () => {
  return (
    <div>
      <CreationForm />
      <UpdateForm />
      <ActionButtons />
    </div>
  );
};
