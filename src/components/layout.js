import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const LayOut = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default LayOut;
