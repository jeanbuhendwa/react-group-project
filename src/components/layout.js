import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';

const LayOut = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default LayOut;
