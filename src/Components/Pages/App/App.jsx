import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import './App.css'
import { Instructors } from '../Instructor/Instructor';

const AppRoutes = () => {
    let routes = useRoutes([  
      { path: '/', element: <Home /> },
      { path: '/instructors' , element: <Instructors/>}
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
