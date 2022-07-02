import React, { useState } from "react";
import axios from "axios";

const CreateTraderProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const traderProfileHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/trader", {
        name,
        email,
        age,
      });
      alert("Successfully added the profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div><center><h1>CreateTraderProfile</h1>
          
        <form onSubmit={traderProfileHandler}>
          <label>Enter your name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br/>
          <br/>

          <label>Enter your email: </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <br/>

          <label>Enter your Age: </label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <br/>
          <br/>

          <input type="submit" value="Submit" />
        </form>
      
    </center></div>
  )
}

export default CreateTraderProfile