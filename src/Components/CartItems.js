import React, { useEffect, useState } from 'react'
import { ListGroup, Row, Col, Image, Table, Button } from 'react-bootstrap';
import { Food_items } from './Context/Context'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { Link } from 'react-router-dom';
import HeaderButtons from './HeaderButtons';

const CartItems = () => {
 const { state: { cart, total }, dispatch } = Food_items();

 const [totals, setTotal] = useState();
 useEffect(() => {
  setTotal(cart.reduce((acc, curr) => acc + Number((curr.price) * curr.qty), 0))

 }, [cart])
 return (
  <>
   {/* Header-Image */}

   <div className='cartheader'>

    <img src='https://www.swagruhafoods.net/assets/images/2.jpg' className='d-block w-100 ' />
    <div>
     <HeaderButtons />
    </div>

   </div>

   <div className='basket'>
    {/* cart products */}

    < div className='cartProducts' >
     <h3>Items in your Cart</h3>
     <hr style={{ color: "blue" }} />
     <ListGroup>
      {
       cart.length === 0 ?
        <h3 style={{ color: "green" }}>No item in a cart</h3>
        :
        <>
         {
          cart.map((item) => {
           return (
            < ListGroup.Item >
             <Row>
              <Col >
               <img src={item.url} alt={item.itemName} className='cartitemimage'
               />
              </Col>
              <Col style={{ textAlign: 'center' }}>
               <h5>{item.itemName}</h5>
              </Col>
              <Col >
               <h5>₹{item.price}</h5>
              </Col>
              <Col>
               <p>
                <MdExpandLess onClick={() => dispatch({
                 type: "INC_QTY",
                 payload: {
                  id: item.id, qty: item.qty
                 }
                })} />
                <h6>{item.qty}</h6>
                <MdExpandMore onClick={() => dispatch({
                 type: "DEC_QTY",
                 payload: item.id
                })} />
               </p>
              </Col>
              <Col >
               <Button
                onClick={() => dispatch({
                 type: "REMOVE_ITEM",
                 payload: item.id
                })}
               >Remove</Button>
              </Col>
             </Row>
            </ListGroup.Item>
           )
          })
         }</>
      }
     </ListGroup>
    </div >

    {/* orders */}


    <div className='orders' >
     <Link to='/' className='redirect'>Continue Shopping</Link>
     <div >
      <h5>Order Summery</h5>
      <Table responsive>
       <thead style={{ backgroundColor: 'gray' }}>
        <tr>
         <th>Item</th>
         <th>Quantity</th>
         <th>Price</th>
        </tr>
       </thead>
       <tbody>

        {cart.map((item, index) => {
         return (
          <>
           <tr>

            <td key={index}> {item.itemName}</td>
            <td key={index}> {item.qty}</td>
            <td key={index}>₹ {item.price}</td>
           </tr>
          </>
         )
        })}
        <tr>
         <td>Subtotal : </td>
         <td></td>
         <td> {totals}</td>
        </tr>
        <tr>
         <td>Delivery Charge :   </td> <td></td>
         <td>100</td>
        </tr>
        <tr>
         <td>Total    </td> <td></td>
         <td>₹{totals + 100}</td>
        </tr>

       </tbody>
      </Table>
      <Button variant='success'
       onClick={() => dispatch({ type: "CHECK_OUT" })}
      >Check Out</Button>

     </div>
    </div>
   </div>
  </>
 )
}

export default CartItems