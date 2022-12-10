import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './pages/Routes/Routes';


function App() {
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
