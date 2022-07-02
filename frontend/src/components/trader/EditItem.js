import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditItem = () => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");


  const name = useParams();
  const itemName = name.itemName;




  useEffect(() => {
    (async () => 
    await axios.get(`/trador/item/${name.itemName}`).then((res) => {
      setQuantity(res?.data?.[0]?.quantity);
      setPrice(res?.data?.[0]?.price);
    }))();
  }, [])

  const UpdateItemHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/trador/item/update/${name.itemName}`, {
        itemName,
        price,
        quantity,
      });
      alert("Successfully updated");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div>
      
      <center>
    
        <h1>Update Item</h1>
        <form onSubmit={UpdateItemHandler}>
          <br />
          <br />

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
          <br />

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
          <br />

          <input type="submit" value="Submit" />
        </form>
      </center>
    </div>
  );
};

export default EditItem;
