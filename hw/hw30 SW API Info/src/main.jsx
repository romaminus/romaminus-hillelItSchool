import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {Provider} from 'react-redux';
import { store } from './redux/store.js';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Films from './pages/Films.jsx';
import People from './pages/People.jsx';
import Planets from './pages/Planets.jsx';
import Species from './pages/Species.jsx'
import Vehicles from './pages/Vehicles.jsx';
import Starship from './pages/Starships.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'films',
        element: <Films />
      },
      {
        path: 'people',
        element: <People />
      },
      {
        path: 'planets',
        element: <Planets/>
      },
      {
        path: 'species',
        element: <Species/>
      },
      {
        path: 'vehicles',
        element: <Vehicles/>
      },
      {
        path: 'starship',
        element: <Starship/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
