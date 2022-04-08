import './App.css';
import { getAuth } from 'firebase/auth';
import app from './firebase.init'

const auth = getAuth(app)

const showEventEmail = (event) => {
  console.log(event.target.value)
}

const showEventPassword = (event) => {
  console.log(event.target.value)
}

const handleFormSubmit = event => {
  console.log('form-submitted');
  event.preventdefault()
}

function App() {
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input onBlur={showEventEmail} type="email" name="" id="" />
        <input onBlur={showEventPassword} type="password" name="" id="" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
