import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const LayOut = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
);

export default LayOut;
