import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './componants/About/About';
import Inventory from './componants/Inventory/Inventory';
import Login from './componants/Login/Login';
import Orders from './componants/Orders/Orders';
import Shipping from './componants/Shipping/Shipping';
import Shop from './componants/Shop/Shop';
import SignUp from './componants/SignUp/SignUp';
import Main from './layouts/Main';
import productsAndCardLoaders from './loaders/productsAndCardLoaders';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://ema-jon-server.vercel.app/products'),
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: () => fetch('https://ema-jon-server.vercel.app/products'),
          element: <Shop></Shop>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/orders',
          loader: productsAndCardLoaders,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>

        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>

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
