import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Saidbar.css'

const Saidbar = () => {
  return (
    <div>


    <div className="saidbar_all">
      
    <div className="saidbar_row">
      <Link className='link' to={"/"}> <h1>Logo</h1> </Link>

        <ul className=''>
          <li className='saisbar_link'>
            <Link to={'user'}>User</Link>
          </li>
          <li className='saisbar_link'>
            <Link to={'phots'}>Phots</Link>
          </li>
         
        </ul>
      </div>
      <div className="all">
       
        <Outlet/>

      </div>

    </div>
    </div>
  )
}

export default Saidbar