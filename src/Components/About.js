import React from 'react'
import HeaderButtons from './HeaderButtons'

const About = () => {
 return (
  <div>
   <div className='cartheader'>

    <img src='https://www.swagruhafoods.net/assets/images/5.jpg' className='d-block w-100 ' />
   </div>
   <div>
    <HeaderButtons />
   </div>

   <div className='about'>
    <h1 style={
     {
      color: "blue"
     }
    }>ABOUT US</h1>
    <p>
     BALAJI FOODS : The Balaji foods is introducing Home Foods. We feel that everyone should taste our sweets at least once to feel the experience. Our sweets are 100% home-made with fresh and best quality ingredients which are all sourced from nature. We make each sweet in a way that, we are making it for our own family consumption. The best quality ghee is used in our sweets they give the best taste that you experience by eating our sweets. BALAJI FOODS is very popular among its customers, and we owe this success to our relentless drive to maintain taste, hygiene, quality, and our passion for customer satisfaction.

     BALAJI FOODS is India's online platform for famous and unique sweets, handmade by our vendors with locally sourced produce, traditionally most of these sweet recipes are perfected and treasured. Born with an idea to address the problem of finding traditional fresh and hygienic Sweets and Namkeens snacks without distress. BALAJI FOODS redefines the sweet shopping experience like never before. We have brought together all stages of fresh sweet procurement, processing, and delivery under one roof whilst ensuring quality.
    </p>
   </div>


  </div>
 )
}

export default About