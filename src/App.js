
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Components/Home/Home'

import Statics from './Components/Statics/Statics';
import Blog from './Components/Blog/Blog';
import Topics from './Components/Topics/Topics';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import Route404 from './Components/Route404/Route404';


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
          path: "/home",

          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),



          element: <Home></Home>,
        },
        {
          path: "/topics",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),


          element: <Topics></Topics>
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
          path: "/questions",

          element: <Topics></Topics>
        },
        {
          path: '/questions/:quizId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <QuizDetails></QuizDetails>
        }


      ]

    },
    { path: '*', element: <Route404></Route404> }
  ]);
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
