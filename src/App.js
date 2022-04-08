import './App.css';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showEventEmail = (event) => {
    setEmail(event.target.value)
  }

  const showEventPassword = (event) => {
    setPassword(event.target.value)
  }

  const handleFormSubmit = event => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user)
      })
      .catch(error =>
        console.error(error)
      )
    event.preventDefault()
  }

  return (
    <div>
      <div className='registration w-50 mx-auto mt-5'>
        <h1 className='text-primary'>Please register</h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={showEventEmail} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Email please!.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={showEventPassword} type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
