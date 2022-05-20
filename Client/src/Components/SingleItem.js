import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import './Styles.css'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Food_items } from './Context/Context'

const SingleItem = ({ product }) => {
  const { state: { cart, viewProduct }, dispatch } = Food_items();
  const [models, setModels] = useState(false);
  const [mdata, setMdata] = useState([]);

  return (
    <div className='products'>

      <Card>
        <Card.Img
          src={product.url}
          variant='top'
        />
        <Button className='modelbtn bg-secondary'
          onClick={() => {
            setModels(true);
            setMdata(product)
          }}

        >Quick-View</Button>
        <span><AiFillHeart /></span>
        <h4 className='price'>₹ {product.price}</h4>
        <Card.Body>
          <Card.Title>{product.itemName}</Card.Title>
          {
            cart.some((c) => c.id === product.id) ? (
              <Button variant='danger' size='lg'
                onClick={() => dispatch({
                  type: "REMOVE_ITEM",
                  payload: product.id
                })}
              >Remove From Cart</Button>
            ) :
              (<Button variant='warning' size='lg'
                onClick={() => dispatch({
                  type: "ADD_CART",
                  payload: product
                })}
              >Add to Cart</Button>)
          }

        </Card.Body>
      </Card>
      <Modal
        size="lg"
        show={models}
        onHide={() => setModels(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex'>

          <div>
            <img src={mdata.url} alt={mdata.itemName} />
          </div>
          <div className='m-5'>
            <h1 className='text-center'>{mdata.itemName}</h1>
            <hr />
            <h4 className='text-center bg-secondary'>₹{mdata.price}</h4>
            <hr />
            <div >
              <Button className='m-1 bg-success'>
                <AiFillHeart />
                Wishlist</Button>
              <Button className='m-1 bg-success'
                onClick={() => dispatch({
                  type: "ADD_CART",
                  payload: product
                })}
              >Add to cart</Button>
              {
                viewProduct.some((view) => view.id === product.id) ? (

                  <Button className='bg-danger'
                    onClick={() => dispatch({
                      type: "REMOVE_VIEWITEM",
                      payload: product.id
                    })}
                  >Remove Product</Button>

                ) : (
                  <Link to='/viewProduct'>
                    <Button className='bg-success'
                      onClick={
                        () => dispatch({
                          type: "VIEW_PRODUCT",
                          payload: product
                        })
                      }
                    >Continue Product</Button></Link>

                )
              }
            </div>
          </div>
        </Modal.Body >
      </Modal >
    </div >
  )
}

export default SingleItem