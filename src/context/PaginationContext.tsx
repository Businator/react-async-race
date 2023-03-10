import React, { useReducer, createContext } from 'react';

type initialStateType = {
  page: number;
  count: number;
};

type PageAction = {
  type: string;
  count: number;
};

export const PaginationContext = createContext({
  page: 1,
  count: 0,
  nextPage: () => {},
  prevPage: () => {},
  setCount: (_count: number) => {},
});

const defaultPageState = {
  page: 1,
  count: 0,
};

const pageReducer = (state: initialStateType, action: PageAction) => {
  switch (action.type) {
    case 'SET_COUNT':
      const count = action.count;
      return {
        ...state,
        count: count,
      };

    case 'NEXT_PAGE':
      return {
        ...state,
        page: (state.page += 1),
      };

    case 'PREV_PAGE':
      if (state.page > 1) {
        state.page -= 1;
      }
      return {
        ...state,
        page: state.page,
      };

    default:
      return state;
  }
};

export const PaginationContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [pageState, dispatchCarAction] = useReducer<
    React.Reducer<initialStateType, PageAction>
  >(pageReducer, defaultPageState);

  const setCountHandler = (count: any) => {
    dispatchCarAction({
      type: 'SET_COUNT',
      count: count,
    });
  };

  const nextPageHandler = () => {
    dispatchCarAction({
      type: 'NEXT_PAGE',
      count: 0,
    });
  };

  const prevPageHandler = () => {
    dispatchCarAction({
      type: 'PREV_PAGE',
      count: 0,
    });
  };

  const paginationContext = {
    count: pageState.count,
    page: pageState.page,
    nextPage: nextPageHandler,
    prevPage: prevPageHandler,
    setCount: setCountHandler,
  };

  return (
    <PaginationContext.Provider value={paginationContext}>
      {children}
    </PaginationContext.Provider>
  );
};
