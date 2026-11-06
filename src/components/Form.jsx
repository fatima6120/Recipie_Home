import React, { useState } from "react";

const ContactForm = () => {
  const [state, setState] = useState({
    full_name: "",
    email: "",
    major: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({ ...state, [name]: value });
  };

  const submitHandle = () => {
    alert(JSON.stringify(state));
  };

  return (
    <>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            name="full_name"
            placeholder="Jhon Smith"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="jhon@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>

        <div className="form-group">
          <button type="submit" onClick={submitHandle}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
