import './App.css';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [registered, handleRegistered] = useState(false);
  const showEventEmail = (event) => {
    setEmail(event.target.value)
  }

  const showEventPassword = (event) => {
    setPassword(event.target.value)
  }

  const checkIfRegistered = (event) => {
    handleRegistered(event.target.checked)
  }

  const sendEmailVerification = () => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      });

  }

  const handleFormSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    setValidated(true);

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user
          console.log(user)
          setEmail('')
          setPassword('')
          sendEmailVerification()
        })
        .catch(error =>
          console.error(error)
        )
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          setValidated(response.user)
        })
        .catch(error =>
          setValidated(error)
        )
    }

    event.preventDefault()
  }

  return (
    <div>
      <div className='registration w-50 mx-auto mt-5'>
        <h1 className='text-primary'>Please {registered ? 'Log-in' : 'Register'}</h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={showEventEmail} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Email please!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={showEventPassword} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onClick={checkIfRegistered} type="checkbox" label="Already registered?" />
          </Form.Group>

          <Button variant="primary" type="submit">
            {registered ? 'Log-in' : 'Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
