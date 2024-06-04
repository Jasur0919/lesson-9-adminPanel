import React,{useState,useEffect} from 'react'
import './User.css'
import axios from 'axios'

const User = () => {
  const [user,setUser] = useState([])



    useEffect(() =>{
     axios
     .get('https://jsonplaceholder.typicode.com/users')
     .then((res) =>{
      setUser(res.data);
     })
     .catch(arr =>{
      console.log('>>>>>>>>>>>>>>>', arr);
     }) 
    },[])

    let data = user?.map((el, inx) =>(
      <tr key={el.id}>
        <td>{inx+1}</td>
        <td>{el.name}</td>
        <td>{el.username}</td>
        <td>{el.email}</td>
        <td>{el.address.street}</td>
      </tr>
    ))
  return (
    <>
        <h1>User</h1>

        <table className='table table-bordered table-hover table-striped'>
              <thead className=''>
                <tr>
                  <td>T/R</td> 
                  <td>Name</td>
                  <td>Family</td>
                  <td>Email</td>
                  <td>Adres</td>
                </tr>
              </thead>
              <tbody>
                  {data}
              </tbody>
            </table>
    </>
  )
}

export default User