import { useContext } from 'react';
import { PaginationContext } from '../../context/PaginationContext';

export const ButtonsOfPagination = ({ count, setIsUpdatePage, context }) => {
  const paginationContext = useContext(context);
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
