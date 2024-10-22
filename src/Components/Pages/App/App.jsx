import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import './App.css'
import { Instructors } from '../Instructor/Instructor';
import { Courses } from './../Courses/Courses';

const AppRoutes = () => {
    let routes = useRoutes([  
      { path: '/', element: <Home /> },
      { path: '/instructors' , element: <Instructors/>},
      { path: '/courses' , element: <Courses/>}
    ]);
  
    return routes;
  };
  const App = () => {
    return (
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    );
  };

export default App
