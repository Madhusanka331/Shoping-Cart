import React from 'react'
import { useNavigate } from 'react-router-dom';



const Home = () => {
const history = useNavigate();
  return (
    <div>
        <center>
        <h2>Shopping Cart</h2>
        <button onClick={() => history('/customer')}>Customer</button>
        <button onClick={() => history('/trader')}>Trader</button>
        </center>
    </div>
  )
}

export default Home;