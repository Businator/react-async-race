import { useContext } from 'react';

import styles from './ButtonsOfPagination.module.css';

type ButtonsOfPaginationType = {
  count: number;
  setIsUpdatePage: React.Dispatch<React.SetStateAction<boolean>>;
  context: React.Context<{
    page: number;
    count: number;
    nextPage: () => void;
    prevPage: () => void;
    setCount: (_count: number) => void;
  }>;
  carOnPage: number;
};

export const ButtonsOfPagination = ({
  count,
  setIsUpdatePage,
  context,
  carOnPage,
}: ButtonsOfPaginationType) => {
  const paginationContext = useContext(context);
  return (
    <div className={styles.container}>
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
