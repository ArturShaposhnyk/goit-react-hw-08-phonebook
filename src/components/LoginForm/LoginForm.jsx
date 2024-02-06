import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authThunks';
import { Box, Button, TextField } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Box
      style={{
        marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 450,
      }}
    >
      <form onSubmit={handleLogin}>
        <TextField
          style={{ marginBottom: 20 }}
          id="outlined-basic"
          fullWidth
          label="Email"
          name="email"
          type="email"
        />
        <TextField
          style={{ marginBottom: 20 }}
          id="outlined-basic"
          fullWidth
          label="Password"
          name="password"
          type="password"
        />

        <Button
          style={{ display: 'block', margin: 'auto', textTransform: 'none' }}
          variant="contained"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
