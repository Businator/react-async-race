import { useContext } from 'react';

import styles from './ButtonsOfPagination.module.css';

type ButtonsOfPaginationType = {
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
        }}
      >
        Prev
      </button>
      <button
        disabled={paginationContext.page * carOnPage >= paginationContext.count}
        onClick={() => {
          paginationContext.nextPage();
        }}
      >
        Next
      </button>
    </div>
  );
};
