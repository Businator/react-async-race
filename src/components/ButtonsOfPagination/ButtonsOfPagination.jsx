import { useContext } from 'react';

export const ButtonsOfPagination = ({
  count,
  setIsUpdatePage,
  context,
  carOnPage,
}) => {
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
        disabled={paginationContext.page * carOnPage >= count}
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
