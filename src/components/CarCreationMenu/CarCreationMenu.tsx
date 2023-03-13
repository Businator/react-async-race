import { Winner } from '../../types';
import { ActionButtons } from './components/ActionButtons';
import { CreationForm } from './components/CreationForm';
import { UpdateForm } from './components/UpdateForm';

type CarCreationMenuType = {
  setModalIsClose: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<Winner[]>>;
};

export const CarCreationMenu = ({
  setModalIsClose,
  setWinner,
}: CarCreationMenuType) => {
  return (
    <div>
      <CreationForm />
      <UpdateForm />
      <ActionButtons setModalIsClose={setModalIsClose} setWinner={setWinner} />
    </div>
  );
};
