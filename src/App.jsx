import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Saidbar from './pages/Saidber/Saidbar'
import User from './pages/Saidber/User/User'
import Phots from './pages/Saidber/Phots/Phots'
import SingleRout from './pages/single-rout/SingleRout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Aos from 'aos';

const App = () => {
  // useEffect(() => {
  //   Aos.init({duration: 1000})
  // },[])
  return (
    <div>
 <ToastContainer/>
 <Routes>
  <Route path='/' element={<Saidbar/>}>
  <Route path='user' element={<User/>}/>
  <Route path='phots' element={<Phots/>}/>
  <Route path='/single/:id' element={<SingleRout/>}/>
</Route>

 </Routes>

    </div>
  )
}

export default App