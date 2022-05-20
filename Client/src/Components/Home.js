import React, { useEffect, useState } from 'react'
import { Food_items } from './Context/Context';
import SingleItem from './SingleItem';
import './Styles.css'
import Header from './Header';

const Home = () => {
  const { state: { products, searchItems, searchQuery }, dispatch
  } = Food_items();

  const filteringProducts = () => {
    let sortedProducts = Object.values(products);
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((items) => items.itemName.toLowerCase().includes(searchQuery))
    }
    if (searchItems) {
      sortedProducts = sortedProducts.filter((item) => item.categoryName === (searchItems))
    }

    return sortedProducts;
  }

  return (
    <div >
      <div>
        <Header />
      </div>
      {
        (searchItems) ? <h1>{searchItems}</h1>
          :
          <h1>TOP PRODUCTS</h1>
      }


      <div className='productContainer'>
        {
          filteringProducts().map((items) => {

            return (
              <>
                <SingleItem product={items} key={items.id} />
              </>
            )
          })
        }
      </div>
    </div>
  )
}
//
export default Home