import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Post.css'

const Post = () => {
  const [user,setUser] = useState([])
  const [page, setPage] = useState(1)
  const [lmit, setLmit] = useState(2)



  useEffect(() =>{
   axios
   .get(`http://jsonplaceholder.typicode.com/Photos?_start=${page}&_limit=${lmit}`)
   .then((res) =>{
    setUser(res.data);
   })
   .catch(arr =>{
    console.log('>>>>>>>>>>>>>>>', arr);
   }) 
  },[page, lmit])

  let data = user?.map((el, inx) =>(
    <tr key={el.id}>
      <td>{inx+1}</td>
      <td>{el.userId}</td>
      <td>{el.title}</td>
      <td>{el.body}</td>
    
    </tr>
  ))

  const changePage = (type) => {
    if (type === "prev") {
      if (page > 1) {
        setPage(prev => prev - 1)
      }
    }else {
      setPage(prev => prev + 1)
    }
  }


  return (
    <div>
        <h1 className='ali'>Post</h1>


<div className="smth">
        
        <div className="">
          <div className="sele">
            <select onChange={(e) => setLmit(e.target.value)} className='form-control  my-2'> 
              <option selected>Select limit</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="7">7</option>
            </select>
          </div>
        </div>

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

            <div className="btn d-flex align-items-center gap-3">
              <button onClick={() => changePage("prev")}>Prev</button>
              <p className='fs-3 mt-2'>{page}</p>
              <button onClick={() => changePage("next")}>Prev</button>
            </div>
            </div>
    </div>
  )
}

export default Post