import { useContext } from 'react';
import { PaginationContext } from '../../context/PaginationContext';

export const ButtonsOfPagination = ({ count, setIsUpdatePage }) => {
  const paginationContext = useContext(PaginationContext);
  return (
    <div>
      <button
        disabled={paginationContext.page === 1}
        onClick={() => {
          paginationContext.prevPage();
          setIsUpdatePage(true);
        }}
      >
        Prev
      </button>
      <button
        disabled={paginationContext.page * 7 >= count}
        onClick={() => {
          paginationContext.nextPage();
          setIsUpdatePage(true);
        }}
      >
        Next
      </button>
    </div>
  );
};
