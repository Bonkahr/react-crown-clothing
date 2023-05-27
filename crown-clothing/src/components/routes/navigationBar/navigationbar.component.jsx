import { Outlet, Link } from 'react-router-dom';

import './navigationbar.styles.scss';

import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';

const NavigationBar = () => {
  return (
    <>
      <div className='navigation'>
        <Link
          className='logo-container'
          to='/'
        >
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link
            className='nav-link'
            to=''
          >
            Shop
          </Link>

          <Link
            className='nav-link'
            to='sign-in'
          >
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
