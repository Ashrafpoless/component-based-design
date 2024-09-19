
import { Home, Edit } from './components';
// import {  Edit } from './components/Edit/Edit';

import { ErrorContextProvider } from './contexts';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

export const App = () => {
 

  const Router = createBrowserRouter([
    {path : '/', element:<Home/>  },
    {path : '/edit', element:<Edit/>  },

  ])

  return (
    <ErrorContextProvider>
      <RouterProvider router={Router}>

      </RouterProvider>
    </ErrorContextProvider>
  );
};
