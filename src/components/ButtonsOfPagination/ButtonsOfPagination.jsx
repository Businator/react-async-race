import { useContext } from 'react';
import { PaginationContext } from '../../context/PaginationContext';

export const ButtonsOfPagination = ({ count, setIsCreateNewCar }) => {
  const paginationContext = useContext(PaginationContext);
  return (
    <div>
      <button
        disabled={paginationContext.page === 1}
        onClick={() => {
          paginationContext.prevPage();
          setIsCreateNewCar(true);
        }}
      >
        Prev
      </button>
      <button
        disabled={paginationContext.page * 7 >= count}
        onClick={() => {
          paginationContext.nextPage();
          setIsCreateNewCar(true);
        }}
      >
        Next
      </button>
    </div>
  );
};
