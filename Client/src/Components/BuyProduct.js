import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './Styles.css'

const BuyProduct
 = () => {
  return (
   <div>

    <Card style={{ width: '18rem', height: '13rem', margin: '0 auto', top: '150px', backgroundColor: 'plum', }}>
     <Card.Body>
      <Card.Text>
       <h1>THANK YOU !</h1>
       <h2>Your Order is Registered</h2>
       <Link to='/'>Continue the Shopping</Link>
      </Card.Text>
     </Card.Body>
    </Card>
   </div>
  )
 }

export default BuyProduct
