import React, {useEffect, useState} from 'react'
import './Phots.css'
import axios from 'axios'
import { FaHeartBroken } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Phots = () => {

  
  
  const [user,setUser] = useState([])

  console.log(user);
  useEffect(() =>{
   axios
   .get('https://jsonplaceholder.typicode.com/photos')
   .then((res) =>{
    setUser(res.data);
   })
   .catch(arr =>{
    console.log('>>>>>>>>>>>>>>>', arr);
   }) 
  },[])


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
  return (
    <div>
        <h1 className='photos'>Phots</h1>
      <div className="cards">
        {cards}
      </div>

    </div>
  )
}

export default Phots