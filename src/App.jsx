import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Saidbar from './pages/Saidber/Saidbar'
import User from './pages/Saidber/User/User'
import Phots from './pages/Saidber/Phots/Phots'
import Todos from './pages/Saidber/Todos/Todos'
import Albums from './pages/Saidber/Albums/Albums'
import Comments from './pages/Saidber/Comments/Comments'
import Post from './pages/Saidber/Post/Post'

const App = () => {
  return (
    <div>
 
 <Routes>
<Route path='/' element={<Saidbar/>}>
<Route path='user' element={<User/>}/>
<Route path='phots' element={<Phots/>}/>
<Route path='todos' element={<Todos/>}/>
<Route path='albums' element={<Albums/>}/>
<Route path='comments' element={<Comments/>}/>
<Route path='post' element={<Post/>}/>
</Route>

 </Routes>

    </div>
  )
}

export default App