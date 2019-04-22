import React from "react";
import './AddProfileForm.css';

const AddProfileForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input
      value={props.userName}
      onChange={props.handleChange}
      placeholder="GitHub UserName"
      required
      type="text"
      name="userName"
      id="userName"
    />
    <button type="submit">Add Profile</button>
  </form>
);

export default AddProfileForm;
