import React, { useState } from "react";
import axios from "axios";

const AddItems = () => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const ItemHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/trador/item", {
        itemName,
        price,
        quantity,
      });
      alert("Successfully added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={ItemHandler}>
          <label>Enter item name: </label>
          <input
            type="text"
            name="itemName"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
          <br />
          <br/>

          <label>Enter item Price: </label>
          <input
            type="number"
            name="price"
            id="price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br/>

          <label>Enter items Quantity: </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <br />
          <br/>

          <input type="submit" value="Submit" />
        </form>
      </center>
    </div>
  );
};

export default AddItems;
