import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayOut from './components/layout';
import Mission from './pages/mission';
import Profile from './pages/profile';
import Rocket from './pages/rocket';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Rocket />} />
        <Route path="missions" element={<Mission />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
