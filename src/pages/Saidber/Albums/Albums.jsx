import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Albums = () => {
  const [user,setUser] = useState([])
  console.log(user);


  useEffect(() =>{
   axios
   .get('https://jsonplaceholder.typicode.com/albums')
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
      <td>{el.userId}</td>
      <td>{el.title}</td>
      
    </tr>
  ))
  return (
    <div>
        <h1>Albums</h1>

        
        <table className='table table-bordered table-hover table-striped'>
              <thead className=''>
                <tr>
                  <td>T/R</td> 
                  <td>Userid</td>
                  <td>Title</td>
                
                </tr>
              </thead>
              <tbody>
                  {data}
              </tbody>
            </table>
    </div>
  )
}

export default Albums