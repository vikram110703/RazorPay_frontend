import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from './components/Home.jsx';
import { PaymentSuccess } from './components/PaymentSuccess.jsx';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
      <Route path='/*' element={<Home/>} />

      </Routes>

    </Router>

  );
}

export default App;
