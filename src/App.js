import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './routes/navigation';
import Authentication from './routes/authentication';
import Shop from './routes/shop';
import Checkout from './routes/checkout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' shop element={<Shop />} />
        <Route path='auth' shop element={<Authentication />} />
        <Route path='checkout' shop element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
