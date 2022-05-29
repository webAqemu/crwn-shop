import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../../components/cart-icon';
import CartDropdown from '../../components/cart-dropdown';

import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import './navigation.styles.sass';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='navigation__logo' to='/'>
          <CrwnLogo />
        </Link>
        <div className='navigation__list'>
          <Link className='navigation__link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='navigation__link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className='navigation__link' to='/auth'>
              Sign in
            </Link>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
