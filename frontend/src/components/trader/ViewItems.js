import axios from "axios";
import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const ViewTraderItems = () => {
  const history = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () =>
      await axios.get("/trador/item").then((res) => {
        setData(res.data);
      }))();
  }, []);

  
  return (
    
    <div>
      <center>
        <h1>Update Items</h1>
        <table>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {data.map((value) => (
            <tr key={value.itemName}>
              <td>{value.itemName}</td>
              <td>{value.price}</td>
              <td>{value.quantity}</td>
              <td><button onClick={() => history(`/editItem/${value.itemName}`)}>Edit</button></td> 
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
};

export default ViewTraderItems;
