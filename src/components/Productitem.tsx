import React from 'react'
import { Products } from './types/Products'


export default function Productitem({title,price,count}: Products) {
  return (
    <div>
        <p>title:{title}</p>
        <p>price:{price}</p> 
        <p>count:{count}</p>
    </div>
  )
}