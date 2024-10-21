import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([  
      { path: '/', element: <Home /> },
    
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
