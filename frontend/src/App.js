import React from 'react'
import Home from './components/Home';
import Customer from './components/customer/Customer';
import Trader from './components/trader/Trader';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ViewWishList from './components/customer/ViewWishList';
import CreateProfile from './components/customer/CreateProfile';
import ViewCart from './components/customer/ViewCart';
import ViewItems from './components/customer/ViewItems';
import ViewCProfiles from './components/trader/viewCProfiles';
import AddItems from './components/trader/AddItems';
import AddPromotions from './components/trader/AddPromotions';
import CreateTraderProfile from './components/trader/CreateTraderProfile';
import ViewTraderItems from './components/trader/ViewItems';
import EditItem from './components/trader/EditItem';
import ViewInventry from './components/trader/ViewInventry';
import ViewPromotions from './components/trader/ViewPromotions';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/customer" element={<Customer/>}/>          
          <Route path="/createProfile" element={<CreateProfile/>}/>          
          <Route path="/viewCart" element={<ViewCart/>}/>          
          <Route path="/viewItems" element={<ViewItems/>}/>          
          <Route path="/viewWishList" element={<ViewWishList/>}/>          

          //trador
          <Route path="/trader" element={<Trader/>}/> 
          <Route path='/addItems' element={<AddItems/>}/>
          <Route path='/addPromotions' element={<AddPromotions/>}/>
          <Route path='/createTraderProfile' element={<CreateTraderProfile/>}/>
          <Route path='/editItem/:itemName' element={<EditItem/>}/>
          <Route path='/viewTraderItems' element={<ViewTraderItems/>}/>
          <Route path='/viewCustomerProfiles' element={<ViewCProfiles/>}/>
          <Route path='/ViewInventory' element={<ViewInventry/>}/>
          <Route path='/viewPromotions' element={<ViewPromotions/>}/>
          <Route path='/createTraderProfile' element={<CreateTraderProfile/>}/>
         
        </Routes>
      </Router>
    </div>
  )
}

export default App