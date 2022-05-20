import React, { useState } from 'react'
import HeaderButtons from './HeaderButtons'
import { Card, Button, Modal } from 'react-bootstrap'
import { GrMail, GrPhone } from 'react-icons/gr'

const Contact = () => {
 const [show, setShow] = useState(true)
 const handleClose = () => {
  setShow(false)
 }
 return (
  <div>
   <div className='cartheader'>

    <img src='https://www.swagruhafoods.net/assets/images/5.jpg' className='d-block w-100 ' />
   </div>
   <div>
    <HeaderButtons />
   </div>
   {/* contact cards */}
   <div className='contact'>
    <h1>CONTACT US</h1>
    <div style={{ display: 'flex', justifyContent: 'center', }}>
     <Card style={{ width: '18rem', height: '13rem', alignItems: 'center', marginRight: '15px' }}>
      <GrMail style={{ fontSize: '5rem', color: 'gold', }} />
      <Card.Body>

       <Card.Text>
        balajifoods@gmail.com
       </Card.Text>

      </Card.Body>
     </Card>
     <Card style={{ width: '18rem', height: '13rem', alignItems: 'center', }}>
      <GrPhone style={{ fontSize: '5rem', }} />
      <Card.Body>
       <Card.Text>
        9642581240
       </Card.Text>
      </Card.Body>
     </Card>

    </div>
    <Button variant="success" className='m-5 w-25'
     onClick={() => setShow(true)}
    >Submit</Button>
   </div>
   {
    (show && (
     <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
       <Modal.Title>Please feel free to us feedback</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'center' }}>
       <label htmlFor="mail">Email</label><br />
       <input type="email" id='mail' /><br />
       <label htmlFor="name">Name</label><br />
       <input type="text" id='name' /><br />
       <label htmlFor="number">Mobile Number</label><br />
       <input type="number" id='number' /><br />
       <label htmlFor="msg">Message</label><br />
       <input type="text" id='msg' /><br />
      </Modal.Body>

      <Modal.Footer >
       <Button variant="primary" onClick={handleClose}>
        Submit Feedback
       </Button>
      </Modal.Footer>
     </Modal>
    ))
   }
  </div>
 )
}

export default Contact