import React, { useState } from 'react'
import { Modal, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Food_items } from './Context/Context'
import HeaderButtons from './HeaderButtons'

const QuickProduct = () => {
 const { state: { viewProduct } } = Food_items();
 console.log('viewp', Object.values(viewProduct).itemName)
 return (
  <>

   <div className='cartheader'>
    <img src='https://www.swagruhafoods.net/assets/images/new.jpg' className='d-block w-100 ' />
   </div>
   <div>
    <HeaderButtons />
   </div>

   < div >
    {
     viewProduct.map((tt) => {
      return (
       <Modal.Dialog size="lg" >
        <Modal.Body style={{ display: 'flex', justifyContent: 'space-around' }}>
         <div><img src={tt.url} alt={tt.itemName} /></div>
         <div >
          <h1>{tt.itemName}</h1>
          <hr />
          <h4>{tt.price}</h4>
          <hr />
          <Button variant="secondary" className='me-2 '>Wishlist</Button>
          <Link to='/buy'>
           <Button variant="success" className=''>Buy</Button>
          </Link>
         </div>
        </Modal.Body>
       </Modal.Dialog >
      )
     })
    }
   </div >
  </>

 )
}

export default QuickProduct