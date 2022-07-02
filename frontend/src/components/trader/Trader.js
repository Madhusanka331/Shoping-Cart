import React from "react";
import { useNavigate } from "react-router-dom";

const Trader = () => {
  const history = useNavigate();
  return (
    <div>
      <center>
        <h1>Trader</h1>
        <button onClick={() => history("/addItems")}>Add Items</button>
        <button onClick={() => history("/addPromotions")}>
          Add Promotions
        </button>
        <button onClick={() => history("/createTraderProfile")}>
          Create Trader Profile
        </button>
        <button onClick={() => history("/viewTraderItems")}>View Items</button>
        <button onClick={() => history("/viewCustomerProfiles")}>
          View Customer Profiles
        </button>
        <button onClick={() => history("/ViewInventory")}>
          View Inventroy
        </button>
        <button onClick={() => history("/viewPromotions")}>
          View Promotions
        </button>
        <button onClick={() => history("/createTraderProfile")}>
          Create Trader Profile
        </button>
      
      </center>
    </div>
  );
};

export default Trader;
