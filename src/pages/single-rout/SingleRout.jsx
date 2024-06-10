// import axios from 'axios'
// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// const SingleRout = () => {
//   let {id} = useParams()
// const [img, setImg] = useState("")


// useEffect(() => {
//     axios
//     .get(`https://fakestoreapi.com/products/${id}`)
//      .then(res => setImg(res.data))  
// }, [])
  
//   return (
//     <>
   
// <div className='single'>
//       <h2>{img?.title}</h2>
//       <img src={img?.image} alt="" />
// </div>

//     </>
//   )
// }

// export default SingleRout



import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material';

const SingleRout = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(error => console.error('Failed to fetch product:', error));
    }, [id]);

    return (
        <Box sx={{ padding: '20px', textAlign: 'center' }}>
            {product ? (
                <Box>
                    <Typography variant="h2">{product.title}</Typography>
                    <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
            ) : (
                <Typography variant="body1">Loading...</Typography>
            )}
        </Box>
    );
}

export default SingleRout;
