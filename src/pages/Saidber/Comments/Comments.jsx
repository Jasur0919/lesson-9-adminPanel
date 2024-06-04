import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Comments = () => {

  const [user,setUser] = useState([])
  console.log(user);


  useEffect(() =>{
   axios
   .get('https://jsonplaceholder.typicode.com/comments')
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
      <td>{el.email}</td>
      <td>{el.body}</td>
      
    </tr>
  ))
  return (
    <div>
        <h1>Comments</h1>

        <table className='table table-bordered table-hover table-striped'>
              <thead className=''>
                <tr>
                  <td>T/R</td> 
                  <td>Name</td>
                  <td>Email</td>
                  <td>Body</td>
                
                </tr>
              </thead>
              <tbody>
                  {data}
              </tbody>
            </table>
    </div>
  )
}

export default Comments




