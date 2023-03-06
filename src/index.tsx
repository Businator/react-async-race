import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import { CarContextProvider } from './context/CarContext';
import { PageContextProvider } from './context/PageContext';
import { ErrorPage } from './routes/ErrorPage';
import { Winners } from './routes/Winners';
import { Garage } from './routes/Garage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PageContextProvider>
            <CarContextProvider>
              <Garage />
            </CarContextProvider>
          </PageContextProvider>
        ),
      },
      {
        path: 'garage',
        element: (
          <PageContextProvider>
            <CarContextProvider>
              <Garage />
            </CarContextProvider>
          </PageContextProvider>
        ),
      },
      {
        path: 'winners',
        element: <Winners />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
