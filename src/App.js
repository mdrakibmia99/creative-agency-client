import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddService from './components/routes/Admin/AddService';
import Admin from './components/routes/Admin/Admin';
import ServiceList from './components/routes/Admin/ServiceList';
import Login from './components/routes/Authenticate/Login';
import Register from './components/routes/Authenticate/Register';
import RequireAuth from './components/routes/Authenticate/RequireAuth';
import Customer from './components/routes/Customer/Customer';
import Order from './components/routes/Customer/Order';
import Review from './components/routes/Customer/Review';
import ShowServices from './components/routes/Customer/ShowServices';
import Landing from './components/routes/Home/Landing';


function App() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/customer' element={<RequireAuth><Customer /></RequireAuth>}>
          <Route index element={<Order />} />
          <Route path='showServices' element={<ShowServices />} />
          <Route path='review' element={<Review />} />
        </Route>
       
        <Route path='/admin' element={<RequireAuth><Admin /></RequireAuth>}>
          <Route index element={<ServiceList />} />
          <Route path='addService' element={<AddService />} />
          
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register/>}></Route>
        <Route path='*' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
