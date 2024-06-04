import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Todos = () => {

  const [user,setUser] = useState([])



  useEffect(() =>{
   axios
   .get('https://jsonplaceholder.typicode.com/todos')
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
      <td>{el.title}</td>
      <td>{el.completed}</td>
      {/* <td>{el.email}</td>
      <td>{el.address.street}</td> */}
    </tr>
  ))
  return (
    <div>

        <h1>Todos</h1>

      
        <table className='table table-bordered table-hover table-striped'>
              <thead className=''>
                <tr>
                  <td>T/R</td> 
                  <td>Name</td>
                  <td>Family</td>
                  {/* <td>Email</td>
                  <td>Adres</td> */}
                </tr>
              </thead>
              <tbody>
                  {data}
              </tbody>
            </table>        
    </div>
  )
}

export default Todos