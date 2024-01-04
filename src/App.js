
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './subpages/Home'
import StructureOfSubpages from './components/structureOfSubpages'
import Portfolio from './subpages/Portfolio'
import Contact from './subpages/Contact'
import AboutMe from './subpages/AboutMe'
import Offer from './subpages/Offer'
import Authorization, {action} from './subpages/authorization'
import {getAuthToken as tokenCheck} from './components/tokenCheck'
import ErrorPage from './subpages/ErrorPage';

const router = createBrowserRouter([
  {path: '/', element: <StructureOfSubpages/>, errorElement: <ErrorPage/>, loader: tokenCheck, 
  children:[
    {path:'/', element: <Home/> },
    {path:'/home', element: <Home/>},
    {path:'/portfolio', element: <Portfolio/>, loader: tokenCheck},
    {path: '/contact', element: <Contact/>},
    {path: '/aboutme', element: <AboutMe/>},
    {path: '/offer', element: <Offer/>}, 
    {path: '/login', element: <Authorization/>, action: action}
  ]}])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
