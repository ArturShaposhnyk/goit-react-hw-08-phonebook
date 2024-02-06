import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authThunks';
import { selectUserEmail } from '../../redux/auth/authSelectors';
import { Button, Typography } from '@mui/material';
// import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        style={{ marginRight: 20 }}
        typography="h6"
        color="white"
        component="p"
      >
        email: {userEmail}
      </Typography>
      <Button
        onClick={onLogout}
        variant="contained"
        style={{
          marginRight: 10,
          backgroundColor: 'darkBlue',
          fontSize: 12,
          fontWeight: 'bolt',
          background: 'green',
        }}
        type="button"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
