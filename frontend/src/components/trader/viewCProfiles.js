import axios from "axios";
import React, { useState, useEffect } from "react";

const ViewCProfiles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () =>
      await axios.get("/customer").then((res) => {
        setData(res.data);
      }))();
  }, []);

  return (
    <div>
      <center>
      <h1>Customer Profiles</h1>
      <table style={{border: "1px"}}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        {data.map((value) => 
          <tr key={value.name}>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.age}</td>
          </tr>
        )}
      </table>
      </center>
    </div>
  );
};

export default ViewCProfiles;
