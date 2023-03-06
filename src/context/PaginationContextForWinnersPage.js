import { useReducer, createContext } from 'react';

export const PaginationContextForWinnersPage = createContext({
  page: 1,
  count: 0,
  nextPage: () => {},
  prevPage: () => {},
  setCount: () => {},
});

const defaultPageState = {
  page: 1,
  count: 0,
};

const pageReducer = (state, action) => {
  if (action.type === 'SET_COUNT') {
    const count = action.count;
    return {
      ...state,
      count: count,
    };
  }

  if (action.type === 'NEXT_PAGE') {
    return {
      ...state,
      page: (state.page += 1),
    };
  }

  if (action.type === 'PREV_PAGE') {
    if (state.page > 1) {
      state.page -= 1;
    }
    return {
      ...state,
      page: state.page,
    };
  }
};

export const PaginationContextForWinnersPageProvider = ({ children }) => {
  const [pageState, dispatchCarAction] = useReducer(
    pageReducer,
    defaultPageState
  );

  const setCountHandler = (count) => {
    dispatchCarAction({
      type: 'SET_COUNT',
      count: count,
    });
  };

  const nextPageHandler = () => {
    dispatchCarAction({
      type: 'NEXT_PAGE',
    });
  };

  const prevPageHandler = () => {
    dispatchCarAction({
      type: 'PREV_PAGE',
    });
  };

  const paginationContextForWinnersPage = {
    page: pageState.page,
    nextPage: nextPageHandler,
    prevPage: prevPageHandler,
    setCount: setCountHandler,
  };

  return (
    <PaginationContextForWinnersPage.Provider
      value={paginationContextForWinnersPage}
    >
      {children}
    </PaginationContextForWinnersPage.Provider>
  );
};
