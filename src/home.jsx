import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FaYandex } from "react-icons/fa";


function Home() {
  return (
    <div className='responcive'>
        <>
    <nav className='navbar'>
    <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="" />
  <ul>
    <li>Home</li>
    <li>Shop</li>
    <li>Pages</li>
    <li>Contact</li>
    <li>Blog</li>
    <li><Link className='Admin' to="/admin">Admin</Link></li>
  </ul>
  <div className='icon'>
  <CiSearch /> <MdOutlineFavoriteBorder/> <SlBasket/>
  </div>
    </nav>
    <section className='head'>
    <div className='head_left'>
     <h1 className='heading'>Wood & Close Sofa</h1>
     <p className='paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid eius laboriosam at aliquam soluta quam hic ab et pariatur fugiat.</p>
     <button className='btn'>Buy Now</button>
    </div>
    <div className='sekil'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp" alt="" />
    </div>
    </section>
    <div className='head3'><h2 className='head2'>Featured Category</h2></div>
    <section className='orta'>
       <div className='orta_sol'>
        <div className='sol'>
          <p className='paragraf1'>Premium Quality</p>
          <h3 className='heading1'>Latest foam Sofa</h3>
        </div>
        <div className='saq'>
          <img className='sekil1' src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png.webp" alt="" />
        </div>
       </div>
       <div className='orta_saq'>
        <div className='sol'>
          <p className='paragraf1'>Premium Quality</p>
          <h3 className='heading1'>Latest foam Sofa</h3>
        </div>
        <div className='saq'>
          <img className='sekil2' src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png" alt="" />
        </div>
       </div>
    </section>
    <section className='orta_bottom'>
    <div className='orta_saq1'>
          <p className='paragraf1'>Premium Quality</p>
          <h3 className='heading1'>Latest foam Sofa</h3>
        <div className='saq'>
          <img className='sekil1' src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png" alt="" />
        </div>
       </div>
    <div className='orta_sol1'>
          <p className='paragraf1'>Premium Quality</p>
          <h3 className='heading1'>Latest foam Sofa</h3>
          <div className='saq'>
          <img className='sekil1' src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png" alt="" />
        </div>
       </div>
    </section>
    <section className='center'>
     <div className='center_para'>
      <h5>Awesome</h5>
      <h5 className='heading5'>Shop</h5>
     </div>
     <div className='center_page'>
      <div className='page_photo'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_2.png" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_3.png" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_5.png.webp" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_6.png" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_7.png" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_8.png" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
     </div>
    </section>
    <section className='center_bottom'>
      <div className='center_bottom_left'>
        <img className='center_bottom_image' src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png" alt="" />
      </div>
      <div className='center_bottom_right'>
        <h2 className='text'>Weekly Sale on 60% Off All Products</h2>
        <div className='date'>
          <div className='date_border'>
            <p>Days</p>
            <h3>-1701</h3>
            </div>
          <div className='date_border'>
            <p>Hours</p>
            <h3>13</h3>
          </div>
          <div className='date_border'>
            <p>Minutes</p>
            <h3>49</h3>
            </div>
          <div className='date_border'>
            <p>Seconds</p>
            <h3>44</h3>
          </div>
        </div>
        <div className='inputs'>       
        <input placeholder='  Enter Email Address' type="text" name="" id="" />
        <button className='btn1'>Book Now</button></div>
      </div>
    </section>
    <div className='center_para1'>
      <h5>Best Sellers</h5>
      <h5 className='heading5'>Shop</h5>
     </div>
    <section className='end_top'>
     <div className='center_page1'>
      <div className='page_photo1'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo1'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_2.png" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo1'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_3.png" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      <div className='page_photo1'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" alt="" />
        <h6 className='page_h'>Quartz Belt Watch</h6>
        <p className='page_p'>$150.00</p>
      </div>
      </div>
    </section>
    <section className='endl'>
      <div className='end_center'>
      <center><p className='end_center_text'>JOIN OUR NEWSLETTER</p></center>
      <center><h1 className='end_center_head'>Subscribe to get Updated with new offers</h1></center>
      <input placeholder='Enter Email Address' className='input1' type="text" name="" id="" />
      <button className='btn1'>Subscribe Now</button>
      </div>
    </section>
    <section className='end'>
      <div className='end_photos'>
      <div>
        <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png" alt="" />
        </div>
        <div>
          <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" />
         </div>
        <div>
          <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
          </div>
        <div>
          <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
        </div>
        <div>
          <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
        </div>
        <div>
          <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
        </div>
        <div>
          <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" />
        </div>
        <div>
          <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
        </div>
        <div>
          <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
        </div>
        <div>
          <img className='end_photo' src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
        </div>
        </div>
        <div className='son'>
          <div className='paragraph10'>
            <h2>Top Prodeucts</h2>
            <p className='end_texts'>Managed Website</p>
              <p className='end_texts'>Manage Reputation</p>
              <p className='end_texts'>Power Tools</p> 
              <p className='end_texts'>Marketing Service</p>
          </div>
          <div className='paragraph10'>
             <h2>Top Prodeucts</h2>
            <p className='end_texts'>Managed Website</p>
              <p className='end_texts'>Manage Reputation</p>
              <p className='end_texts'>Power Tools</p> 
              <p className='end_texts'>Marketing Service</p>
          </div>
          <div className='paragraph10'>
             <h2>Top Prodeucts</h2>
            <p className='end_texts'>Managed Website</p>
              <p className='end_texts'>Manage Reputation</p>
              <p className='end_texts'>Power Tools</p> 
              <p className='end_texts'>Marketing Service</p>
          </div>
          <div className='paragraph10'>
             <h2>Top Prodeucts</h2>
              <p className='end_texts'>Managed Website</p>
              <p className='end_texts'>Manage Reputation</p>
              <p className='end_texts'>Power Tools</p> 
              <p className='end_texts'>Marketing Service</p>
          </div>
          <div className='paragraph10'>
             <h2>Top Prodeucts</h2>
            <p className='end_texts'>Heaven fruitful doesn't over lesser in days.</p>
            <p className='end_texts'>Appear creeping</p>
            <div className='end_in'>
            <input placeholder='Email Address' className='in' type="text" /> 
            <button className='btn5'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='goodbye'>
        <div>
        <p className='end_of_para'>Copyright ©2024 All rights reserved | This template is made with <span><MdOutlineFavoriteBorder/></span> <span>by</span> <span className='end_icon'><a href="">Colorlib</a></span></p> 
        </div>
        <div className='react_iconsss'>
         <span className='spans'><FaFacebookF/></span>
         <span className='spans'><FaTwitter/></span> 
         <span className='spans'><MdLanguage/></span>
         <span className='spans'><FaYandex/></span>
        </div>
        </div>
    </section>
        </>
    </div>
  )
}

export default Home