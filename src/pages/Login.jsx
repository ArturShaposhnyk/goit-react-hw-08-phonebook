import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'Store/DataUser/userThunk';
import { Notify } from 'notiflix';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.data.user.name} Welcome back!`);
      })
      .catch(error => {
        Notify.failure('Incorrect login or password');
      })
      .finally(() => {
        setEmail('');
        setPassword('');
      });
  };

  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            style={{ width: '600px', marginBottom: '20px' }}
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            style={{ width: '600px', marginBottom: '20px' }}
            onChange={handleChange}
            name="password"
            value={password}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button type="submit">Log in</Button>
      </Form>
    </Container>
  );
};

export default Login;
