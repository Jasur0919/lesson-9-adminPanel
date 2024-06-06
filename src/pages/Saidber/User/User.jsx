import React,{useState,useEffect} from 'react'
import './User.css'
import axios from 'axios'

const User = () => {
  const [user,setUser] = useState([])
  const [page, setPage] = useState(1)
  const [lmit, setLmit] = useState(2)
  console.log(page);



    useEffect(() =>{
     axios
     .get(`http://jsonplaceholder.typicode.com/users?_start=${page}&_limit=${lmit}`)
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
        <td>{el.name}</td>
        <td>{el.username}</td>
        <td>{el.email}</td>
        <td>{el.address.street}</td>
      </tr>
    ))

    const changePage = (type) => {
      if (type === "prev") {
        if(page > 1) {

          setPage(prev => prev - 1)
        }
      }else {
        setPage(prev => prev + 1)
      }
    } 
  return (
    <div  >
        <h1 className='ali'>User</h1>

      
<div className='smth'>
<div className="">
          <div className="sele">
            <select onChange={(e) => setLmit(e.target.value)} className='form-control  my-2'>
              <option value="" selected>Select lmit</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="7">7</option>
            </select>
          </div>
        </div>
        <table className=' table table-bordered table-hover table-striped'>
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

            <div className="btn d-flex align-items-center gap-3">
              <button  onClick={() => changePage("prev")}>Prev</button>
              <p className='fs-3'>{page}</p>
              <button onClick={() => changePage("next")}>Next</button>
            </div>
            </div>
    </div>
  )
}

export default User