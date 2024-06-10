import React, {useEffect, useState} from 'react'
import './Phots.css'
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { toast } from 'react-toastify';

import axios from 'axios'
import { FaHeartBroken } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Phots = () => {

  
  
  const [user,setUser] = useState([])
  const [page,setPage] = useState(1)
  const [lmit,setLmit] = useState(2)
  const [loading,setLoading] = useState(false)

  console.log(user);
  useEffect(() =>{
    setLoading(true)
   axios
   .get(`https://fakestoreapi.com/products?_start=${page}&_limit=${lmit}`)
   .then((res) =>{
    setUser(res.data);
   })
   .catch(arr =>{
    console.log('>>>>>>>>>>>>>>>', arr);
   })
   .finally(() =>{
    setLoading(false)
   })
  },[page,lmit])


  //   C A R D S

  let cards  = user?.map((pro) => (
    <div key={pro.id} className="card_1"  
    //  data-aos="flip-left"
    // data-aos-easing="ease-out-cubic"
    // data-aos-duration="2000"
    >
            <span className='span'><FaHeartBroken />  <IoCartOutline /></span>

            <Link to={`/single/${pro.id}`} onClick={() => toast.success('success')}> <img src={pro.image} alt="" /></Link>
           
            <h5>{pro.title}</h5>
            <h3>{pro.price}   $ </h3>
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
        <h1 className='ali'>Phots</h1>

<div className="smth">
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

        {
          loading ? <Loading count={8}/>
          :
          <></>
        }
      <div className="cards">
        {cards}
      </div>

      
      <div className="btn d-flex align-items-center gap-3">
              <button  onClick={() => changePage("prev")}>Prev</button>
              <p className='fs-3'>{page}</p>
              <button onClick={() => changePage("next")}>Next</button>
            </div>
            </div>

    </div>
  )
}

export default Phots