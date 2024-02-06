import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../redux/auth/authSelectors';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const userName = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box
      style={{
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 800,
      }}
    >
      {isLoggedIn ? (
        <Typography
          style={{
            textAlign: 'center',
            marginBottom: 20,
            fontWeight: 500,
          }}
          variant="h3"
          component="h3"
        >
          Hello {userName}
        </Typography>
      ) : (
        <Typography
          style={{ textAlign: 'center', marginBottom: 25 }}
          component="p"
          variant="h3"
        >
          Create personal digital directory of your contacts
          <Typography
            style={{ textAlign: 'center' }}
            component="p"
            variant="h6"
          >
            To start working with the directory,{' '}
            <Link to="/register" style={{ color: 'red' }}>
              register
            </Link>{' '}
            or{' '}
            <Link to="/login" style={{ color: 'red' }}>
              log in
            </Link>
          </Typography>
        </Typography>
      )}
    </Box>
  );
};

export default HomePage;
