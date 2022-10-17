import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './componants/Inventory/Inventory';
import Login from './componants/Login/Login';
import Orders from './componants/Orders/Orders';
import Shop from './componants/Shop/Shop';
import SignUp from './componants/SignUp/SignUp';
import Main from './layouts/Main';
import productsAndCardLoaders from './loaders/productsAndCardLoaders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCardLoaders,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>

        },
        {
          path: '/login',
          element: <Login></Login>

        },
        {
          path: '/signup',
          element: <SignUp></SignUp>

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
