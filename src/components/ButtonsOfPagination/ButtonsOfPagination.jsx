import { useContext } from 'react';
import { PageContext } from '../../context/PageContext';

export const ButtonsOfPagination = ({ count, setIsCreateNewCar }) => {
  const pageContext = useContext(PageContext);
  return (
    <div>
      <button
        disabled={pageContext.page === 1}
        onClick={() => {
          console.log(pageContext.count);
          pageContext.prevPage();
          setIsCreateNewCar(true);
        }}
      >
        Prev
      </button>
      <button
        disabled={pageContext.page * 7 >= count}
        onClick={() => {
          console.log(pageContext.count);
          pageContext.nextPage();
          setIsCreateNewCar(true);
        }}
      >
        Next
      </button>
    </div>
  );
};
