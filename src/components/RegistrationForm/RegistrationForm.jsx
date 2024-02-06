import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authThunks';
import { Box, Button, TextField } from '@mui/material';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <Box
        style={{
          marginTop: 40,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 450,
        }}
      >
        <form onSubmit={handleRegister}>
          <TextField
            style={{ marginBottom: 20 }}
            id="outlined-basic"
            fullWidth
            label="Username"
            variant="outlined"
            type="text"
            name="name"
          />
          <TextField
            style={{ marginBottom: 20 }}
            id="outlined-basic"
            fullWidth
            label="Email"
            type="email"
            name="email"
          />
          <TextField
            style={{ marginBottom: 20 }}
            id="outlined-basic"
            fullWidth
            label="Password"
            type="password"
            name="password"
          />
          <Button
            style={{ display: 'block', margin: 'auto', textTransform: 'none' }}
            variant="contained"
            type="submit"
          >
            Register
          </Button>
        </form>
      </Box>
    </>
  );
};

export default RegistrationForm;
