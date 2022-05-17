import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './routes/navigation';
import SignIn from './routes/sign-in';

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' shop element={<Shop />} />
        <Route path='sign-in' shop element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
