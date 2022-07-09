import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/routes/Admin/Admin';
import Login from './components/routes/Authenticate/Login';
import Register from './components/routes/Authenticate/Register';
import Customer from './components/routes/Customer/Customer';
import Landing from './components/routes/Home/Landing';


function App() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register/>}></Route>
        <Route path='*' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
