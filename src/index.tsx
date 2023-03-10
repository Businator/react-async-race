import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import { PaginationContextProvider } from './context/PaginationContext';
import { ErrorPage } from './routes/ErrorPage';
import { Winners } from './routes/Winners';
import { Garage } from './routes/Garage';

import { CarContextProvider } from './context/CarContext';
import { PaginationContextForWinnersPageProvider } from './context/PaginationContextForWinnersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PaginationContextProvider>
            <CarContextProvider>
              <Garage />
            </CarContextProvider>
          </PaginationContextProvider>
        ),
      },
      {
        path: 'garage',
        element: (
          <PaginationContextProvider>
            <CarContextProvider>
              <Garage />
            </CarContextProvider>
          </PaginationContextProvider>
        ),
      },
      {
        path: 'winners',
        element: (
          <PaginationContextForWinnersPageProvider>
            <Winners />
          </PaginationContextForWinnersPageProvider>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
