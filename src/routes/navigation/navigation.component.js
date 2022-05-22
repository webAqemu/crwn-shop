import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import './navigation.styles.sass';
const Navigation = () => {
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
          <Link className='navigation__link' to='/auth'>
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
