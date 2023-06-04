import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoutes from '../routes/AppRoutes';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navigation />
      <div className='routes__container'>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );

}

export default App;
