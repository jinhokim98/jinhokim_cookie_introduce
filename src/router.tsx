import {createBrowserRouter} from 'react-router-dom';

import Resume from '@pages/Resume';
import Test from '@pages/Test';
import App from './App';
import ROUTER_URL from '@constants/routerUrl';

const router = createBrowserRouter([
  {
    path: ROUTER_URL.base,
    element: <App />,
    children: [
      {
        index: true,
        element: <Resume />,
      },
      {
        path: ROUTER_URL.test,
        element: <Test />,
      },
    ],
  },
]);

export default router;