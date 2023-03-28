import React from "react";
import Card from "../Ui/Card";


const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
    <form onSubmit={addUserHandler}>
      <label htmlFor="Username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="numbers" />
      <button type="submit" >Add Maniac User</button>
    </form>
    </Card>
  );
};

export default AddUser;
