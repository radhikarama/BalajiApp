import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { reducer } from './Reducer';
import axios from 'axios';


const ProductsContext = createContext();
const Context = ({ children }) => {

 //const url = 'http://localhost:5000/gettingItemsdata';
 const url = "https://sweetsapplication.herokuapp.com/gettingItemsdata";
 useEffect(() => {
  fetchData();
 }, [])
 const fetchData = async () => {
  const response = await axios.get(url)
  console.log(response, 'herokudata')
  if (response.status === 200) {

   dispatch({
    type: "PRODUCTS_DATA",
    payload: response?.data?.data
   })
  }
 }

 const [state, dispatch] = useReducer(reducer, {
  products: [],
  cart: [],
  viewProduct: [],
  total: 0,
  searchQuery: "",
  searchItems: ""
 })

 return <ProductsContext.Provider value={{ state, dispatch }}>
  {children}
 </ProductsContext.Provider>

}
export const Food_items = () => {
 return useContext(ProductsContext)
}
export { Context, ProductsContext };