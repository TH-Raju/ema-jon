import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './componants/Inventory/Inventory';
import Orders from './componants/Orders/Orders';
import Shop from './componants/Shop/Shop';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>

        }
      ]
    }

  ]);
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
