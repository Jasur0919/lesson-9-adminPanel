import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleRout = () => {
  let {id} = useParams()
const [img, setImg] = useState("")


useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
     .then(res => setImg(res.data))  
}, [])
  
  return (
    <>
   
<div className='single'>
      <h2>{img?.title}</h2>
      <img src={img?.image} alt="" />
</div>

    </>
  )
}

export default SingleRout