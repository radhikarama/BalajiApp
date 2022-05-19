import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, DropdownButton, Dropdown, Form, Button, Badge } from 'react-bootstrap'
import { Food_items } from './Context/Context'
import { BsFillCartFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { HeaderElements } from './Data'
const HeaderButtons = () => {
  const { state: { products, cart }, dispatch } = Food_items();

  const categories = [...new Set(Object.values(products).map((item) => item.categoryName))];
  const [showLinks, setShowLinks] = useState(false);

  return (
    <article className='dropdown' >
      {
        HeaderElements.map((links) => {
          return (
            <Link to={links.link} >
              <Button className='headerbtns' key={links.id}>{links.text}</Button></Link>
          )
        })
      }

      <select className='headerbtns' onChange={(e) => dispatch({
        type: "FILTER_BY_SEARCHITEMS",
        payload: e.target.value
      })} >
        {
          categories.map((item) => {
            return <option>
              {item}
            </option>
          })
        }
      </select>

      <pre className='toggle'>
        <button>
          <p className='d-flex'>
            <BsFillCartFill className='carticon' />
            <p>({cart.length})</p></p>
        </button>

        <button className='fbars' onClick={() => setShowLinks(!showLinks)}><FaBars /></button>
      </pre>

      {
        (showLinks && (
          <>
            {
              HeaderElements.map((links) => {
                return (

                  <Link to={links.link}>
                    <Button>{links.text}</Button></Link>
                )
              })
            }
            <select onChange={(e) => dispatch({
              type: "FILTER_BY_SEARCHITEMS",
              payload: e.target.value
            })} >
              {
                categories.map((item) => {
                  return <option>
                    {item}
                  </option>
                })
              }
            </select>
          </>
        ))
      }

    </article >
  )
}

export default HeaderButtons