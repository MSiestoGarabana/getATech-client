import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoutes from '../routes/AppRoutes';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.contexts';
import { useState, useEffect } from 'react';
import userService from '../services/user.services';

function App() {

  const { user } = useContext(AuthContext)
  const [sessionData, setSessionData] = useState({})

  useEffect(() => {
    user && userService
      .getUserById(user._id)
      .then(({ data }) => { setSessionData(data) })
      .catch(err => console.log(err))
  }, [user])

  return (
    <div className="App">
      <Navigation user={user} setSessionData={setSessionData} />
      <div className='routes__container'>
        <AppRoutes />
      </div>
      <Footer sessionData={sessionData} />
    </div>
  );

}

export default App;
