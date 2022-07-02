import React from 'react'
import { useNavigate } from 'react-router-dom';



const customer = () => {
  const history = useNavigate();
  return (
    <div>
        <center>
        <button onClick={() => history('/createProfile')}>Customer</button>
        <button onClick={() => history('/viewCart')}>View Cart</button>
        <button onClick={() => history('/viewItems')}>View Items</button>
        <button onClick={() => history('/viewWishList')}>View Your Wish List</button>
        </center>
    </div>
  )
}

export default customer