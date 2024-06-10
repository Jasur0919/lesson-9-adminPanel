import axios from 'axios'
import './SingleRout.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
// import './SingleRouter.css'
import { GoHeart } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
// import rasm1 from '../../assets/img/rasm5.png'
import { Link } from 'react-router-dom';
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SingleRout = () => {
  let {id} = useParams()
const [img, setImg] = useState("")
const[count,setCount] = useState(0)
const onclick = () =>{
  setCount(count + 1)
}
const go = () =>{
  setCount(count - 1)
}


useEffect(() => {
    axios
    // .get(`https://fakestoreapi.com/products/${id}`)
    .get(`https://fakestoreapi.com/products/${id}`)
     .then(res => setImg(res.data))  
}, [id])
  
  return (
    <div>
 {/* <div className="single">
            <div className="container">
              <div className="single_row">
              <div className="single_alt">
                    <Link to={'/'}>Home</Link> /
                </div>
                <div className="single_alt">
                    <Link to={'/'}>Hot Deal</Link> /
                </div>
                <div className="single_alt">
                    <p>Nike Airmax 270 React</p> 
                </div>
              </div>
            </div>
   
          </div> */}

          <div className="single_row_link container">
          <div className="single_week">
            <div className="img">
              <img src={img?.image} alt="" />  
            </div>
             <div className="bot">
             <div className="bot_all">
             <img src={img?.image} alt="" />  
                </div>
                <div className="bot_all">
                <img src={img?.image} alt="" />  
                </div>
                <div className="bot_all">
                <img src={img?.image} alt="" />  
                </div>
                {/* <div className="bot_all">
                <img src={img?.image} alt="" />  
                </div> */}
             </div>

        </div>
        <div className="single_week">
           <div className="tig">
            <h1>Nike Airmax 270 React</h1>
            <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
                <div className="ikon_all">
                   <p>0 reviews</p>                
                </div>
                <div className="ikon_all">
                    <span>Submit a review</span>                   
                </div>
            </div>
            <div className="all"></div>
            <div className="p1">
                {/* <p>${img?.rating.count}<span>${data?.price}</span> <span className='span'>{data?.rating.rate} Off</span></p> */}
            </div>
            <div className="strok">
            <div className="strok_all">
                    <p>Availability:</p>
                </div>
                <div className="strok_all">
                    <p>In stock</p>
                </div>
            </div>
            <div className="strok">
            <div className="strok_all">
                    <p>Category::</p>
                </div>
                <div className="strok_all">
                    <p style={{marginLeft:'31%'}}> Accessories</p>
                </div>
            </div>
            <div className="strok">
            <div className="strok_all">
                    <p>Free shipping</p>
                </div>
            </div>
            <div className="all"></div>

            <div className="color">
                <p>Select Color:</p>
                <div className="color_all">
            <div className="al5">
            <div className="al"></div>
            </div>
                </div>
                <div className="color_all">
                  <div className="al1"></div>
                </div>
                <div className="color_all">
                  <div className="al2"></div>
                </div>
                <div className="color_all">
                  <div className="al3"></div>
                </div>
            </div>
            <div className="siz">
            <div className="siz_all">
                    <p>Size</p>
                </div>
                <div className="siz_all">
                    <select name="" id="">
                    <option value="">XS</option>
                    <option value="">XML</option>
                    <option value="">XSS</option>
                    </select>
                </div>
            </div>
            <div className="all"></div>

  <div className="hammasi_alt">
  <div className="column">
        <div className="span-son">
        <button onClick={onclick}><VscChevronUp /></button>
  </div>
  <div className="span-son">
  <span>{count}</span>
    
  </div>
  <div className="span-son">
     <button disabled={count <= 0} onClick={go}><VscChevronDown /></button>
        </div>
     </div>
    <div className="olll">
    <div className="cart">
     <div className="cart_all">
      <LuShoppingCart />
      </div>
      <div className="cart_all">
     <p>Add To Cart</p>
      </div>
     </div>
     <div className="lik">
     <GoHeart />
     </div>
    </div>
  </div>
  <div className="all"></div>
<div className="facebook">
<div className="facebook_all">
<div className="facebook_row">
    <FaFacebookF />
    </div>
    <div className="facebook_row">
   <p>Share on Facebook</p>
    </div>
</div>


<div className="facebook_all">
<div className="facebook_row">
<FaTwitter />
    </div>
    <div className="facebook_row">
   <p>Share on Twitter</p>
    </div>
</div>
</div>

            
           </div>
        </div>
        <div className="single_week">
          <h2>BEST SELLER</h2>
          <Swiper
        cssMode={true}
        navigation={false}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="alr">
        <img src={img?.image} alt="" />  
    <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
            </div>
            <div className="pri">
                <p>$499 <span>$599</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="alr">
        <img src={img?.image} alt="" />  
    <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
            </div>
            <div className="pri">
                <p>$499 <span>$599</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="alr">
        <img src={img?.image} alt="" />  
    <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
            </div>
            <div className="pri">
                <p>{img?.price} <span>$599</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="alr">
        <img src={img?.image} alt="" />  
    <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
            </div>
            <div className="pri">
                <p>$499 <span>$599</span></p>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
          </div>
        </div>
  </div>

  )
}

export default SingleRout