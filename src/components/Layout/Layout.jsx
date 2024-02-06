import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import AuthBar from 'components/AuthBar/AuthBar';
import Loader from 'components/Loader/Loader';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <AppBar component="header" position="static">
        <Toolbar>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/">
                <Typography typography="h6" color="white">
                  Home
                </Typography>
              </Link>
            </li>
          </ul>
          {isLoggedIn && (
            <Link to="contacts">
              <Typography
                style={{ marginLeft: 35 }}
                typography="h6"
                color="white"
              >
                Contacts
              </Typography>
            </Link>
          )}

          {isLoggedIn ? <UserMenu /> : <AuthBar />}
        </Toolbar>
      </AppBar>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
