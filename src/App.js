import './App.css';
import { getAuth } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const auth = getAuth(app)

const showEventEmail = (event) => {
  console.log(event.target.value)
}

const showEventPassword = (event) => {
  console.log(event.target.value)
}

const handleFormSubmit = event => {
  console.log('form-submitted');
  event.preventDefault()
}

function App() {
  return (
    <div>
      <div className='registration w-50 mx-auto mt-5'>
        <h1 className='text-primary'>Please register</h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={showEventEmail} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={showEventPassword} type="password" placeholder="Password" />
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
