import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        //if it just is a path of '/' it will render the Home element bc it's the index
        //localhost:3001/
        index: true,
        element: <About />,
      },
      {
        //localhost:3001/contact
        path: '/contact',
        element: <Contact />,
      },
      {
        //localhost:3001/portfolio
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        //localhost:3001/resume
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
