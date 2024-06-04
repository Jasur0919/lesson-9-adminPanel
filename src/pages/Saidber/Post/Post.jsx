import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Post = () => {
  const [user,setUser] = useState([])



  useEffect(() =>{
   axios
   .get('https://jsonplaceholder.typicode.com/posts')
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
      <td>{el.body}</td>
    
    </tr>
  ))
  return (
    <div>
        <h1>Post</h1>
        

        <table className='table table-bordered table-hover table-striped'>
              <thead className=''>
                <tr>
                  <td>T/R</td> 
                  <td>Userid</td>
                  <td>Title</td>
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

export default Post