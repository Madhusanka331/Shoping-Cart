import React, { useState } from "react";
import axios from "axios";

const AddPromotions = () => {
  const [promotionName, setPromotionName] = useState("");
  const [discount, setDiscount] = useState("");

  const PromotionHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/trador/item", {
        promotionName,
        discount,
      });
      alert("Successfully added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div><center><h1>AddPromotions</h1>
            <br/>
            <br/>
    <form onSubmit={PromotionHandler}>
        <label>Enter Promotion name: </label>
        <input
          type="text"
          name="promotion Name"
          id="itemName"
          value={promotionName}
          onChange={(e) => setPromotionName(e.target.value)}
          required
        />
        <br/>
        <br/>

        <label>Enter Discount : </label>
        <input
          type="number"
          name="discount"
          id="discount"
          required
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        /> %
        <br/>
        <br/>

        <input type="submit" value="Submit" />
      </form>
    </center>
    </div>
  )
}

export default AddPromotions