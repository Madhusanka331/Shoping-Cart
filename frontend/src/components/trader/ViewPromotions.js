import axios from "axios";
import React, { useState, useEffect } from "react";

const ViewPromotions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () =>
      await axios.get("/promotions").then((res) => {
        setData(res.data);
      }))();
  }, []);


  return (
    <div><center><h1>ViewPromotions</h1>
      <table>
        <tr>
          <th>Promotion Name</th>
          <th>Discount Rate</th>
        </tr>
        {data.map((value) => 
          <tr key={value.promotionName}>
            <td>{value.promotionName}</td>
            <td>{value.discount}</td>
          </tr>
        )}
      </table>
    </center></div>
  )
}

export default ViewPromotions