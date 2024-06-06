import React, {useEffect, useState} from 'react'
import './Phots.css'
import axios from 'axios'
import { FaHeartBroken } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Phots = () => {

  
  
  const [user,setUser] = useState([])
  const [page,setPage] = useState(1)
  const [lmit,setLmit] = useState(2)

  console.log(user);
  useEffect(() =>{
   axios
   .get(`http://jsonplaceholder.typicode.com/Photos?_start=${page}&_limit=${lmit}`)
   .then((res) =>{
    setUser(res.data);
   })
   .catch(arr =>{
    console.log('>>>>>>>>>>>>>>>', arr);
   }) 
  },[page,lmit])


  //   C A R D S

  let cards  = user?.slice(0, 8)?.map((pro) => (
    <div key={pro.id} className="card_1"  
    //  data-aos="flip-left"
    // data-aos-easing="ease-out-cubic"
    // data-aos-duration="2000"
    >
            <span className='span'><FaHeartBroken />  <IoCartOutline /></span>
            <img src={pro.thumbnailUrl} alt="" />
            <h5>{pro.title}</h5>
            <h3>{pro.price} 1000$ </h3>
            <button>Add mobile</button>
          </div>
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
    <div>
        <h1 className='photos'>Phots</h1>

        <div className="row">
          <div className="col-md-4">
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
      <div className="cards">
        {cards}
      </div>

      
      <div className="btn d-flex align-items-center gap-3">
              <button  onClick={() => changePage("prev")}>Prev</button>
              <p className='fs-3'>{page}</p>
              <button onClick={() => changePage("next")}>Next</button>
            </div>

    </div>
  )
}

export default Phots