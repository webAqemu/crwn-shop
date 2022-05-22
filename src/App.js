import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './routes/navigation';
import Authentication from './routes/authentication';

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' shop element={<Shop />} />
        <Route path='auth' shop element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
