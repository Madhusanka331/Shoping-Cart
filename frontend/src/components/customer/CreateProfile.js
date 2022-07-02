import React, { useState } from "react";
import axios from "axios";

const CreateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  

  const profileHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/customer", {
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
    <div>
      <center>
        <form onSubmit={profileHandler}>
          <h1>Create Customer Profile</h1>
          <br/>
          <br/>
          <label>Enter your name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br/><br/>

          <label>Enter your email: </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/><br/>

          <label>Enter your age: </label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <br/><br/>

          <input type="submit" value="Submit" />
        </form>
      </center>
    </div>
  );
};

export default CreateProfile;
