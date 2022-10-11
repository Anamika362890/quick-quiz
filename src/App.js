
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Components/Home/Home'

import Statics from './Components/Statics/Statics';
import Blog from './Components/Blog/Blog';
import Topics from './Components/Topics/Topics';


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",

          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),



          element: <Home></Home>,
        },
        {
          path: "/statics",

          element: <Statics></Statics>
        },
        {
          path: "/blog",

          element: <Blog></Blog>
        },
        {
          path: "/topics",

          element: <Topics></Topics>
        },

      ]

    },
  ]);
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
