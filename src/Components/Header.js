import React, { useState } from 'react'
import { Carousel, Button, FormControl } from 'react-bootstrap'

import { Data } from './Data'
import './Styles.css'
import { GrRestaurant } from 'react-icons/gr'
import HeaderButtons from './HeaderButtons'
import { Food_items } from './Context/Context'

const Header = () => {
  const { dispatch } = Food_items();
  return (
    <div className='hh'>
      <Carousel className='header' >

        {
          Data.map((items) => {
            return (
              <Carousel.Item key={items.id} >
                <img
                  src={items.url}
                  className='d-block w-100'
                />
              </Carousel.Item>
            )
          })}
      </Carousel >

      <HeaderButtons />

      <FormControl className='search' style={{ width: '500px' }} placeholder='Search for an Item'
        onChange={(e) => dispatch({
          type: "FILTER_BY_SEARCH",
          payload: e.target.value
        })}
      />
      <div className='foodicon'>
        <GrRestaurant className='resicon' />
        <h1 className='name'>Balaji Foods</h1>
      </div>
    </div>
  )
}

export default Header