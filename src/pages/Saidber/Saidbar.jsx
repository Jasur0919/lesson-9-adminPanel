import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Saidbar.css'

const Saidbar = () => {
  return (
    <div>


    <div className="saidbar_all">
      
    <div className="saidbar_row">
    <h1>Logo</h1>

        <ul className=''>
        <li className='saisbar_link'>
            <Link to={'user'}>User</Link>
          </li>
          <li className='saisbar_link'>
            <Link to={'phots'}>Phots</Link>
          </li>
          <li className='saisbar_link'>
            <Link to={'todos'}>Todos</Link>
          </li>
          <li className='saisbar_link'>
            <Link to={'albums'}>Albums</Link>
          </li>
          <li className='saisbar_link'>
            <Link to={'comments'}>Comments</Link>
          </li>
          <li className='saisbar_link'>
            <Link to={'post'}>Post</Link>
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