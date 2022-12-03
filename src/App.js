import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './assets/component/Signup/Signup';
import Login from './assets/component/Login/Login';
import NotFound from './assets/component/NotFound/NotFound';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Congratulation from './assets/component/Congratulation/Congratulation';
import ResetPassword from './assets/component/ResetPassword/ResetPassword';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Signup></Signup>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/congratulation' element={<Congratulation></Congratulation>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
