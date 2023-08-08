import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import validEmail from "../helpers/helpers";
import contactStyles from "../css/contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const id = e.target.id;
    const inputValue = e.target.value;

    switch (id) {
      case "name":
        setName(inputValue);
        break;
      case "email":
          setEmail(inputValue);
        break;
      case "message":
        setMessage(inputValue);
        break;
    }
  };
  const validate = (e) => {
    const id = e.target.id;
    const inputValue = e.target.value;
    switch (id) {
      case "email":
        if (!validEmail(inputValue) || !inputValue) {
          setErrorMessage("It is required to enter a valid email!");
          setTimeout(() => setErrorMessage(''), 3000);
          return;
        }
      break;
      case "name":
        if (!inputValue){
          setErrorMessage('Name is required')
          setTimeout(() => setErrorMessage(''), 3000);
          return;
        }
      break;
      case "message":
        if (!inputValue){
          setErrorMessage('Message is required')
          setTimeout(() => setErrorMessage(''), 3000);
          return;
        }
      break;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    alert("Message has been sent!");
  };

  return (
    <>
      <Header />
      <div className='mx-3'>
        <h1 className={`${contactStyles.header}`}>Contact Page</h1>
        <p></p>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            id="name"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Type your name here."
            className={`${contactStyles.inputStyling}`}
            onBlur= {validate}
          />
          <input
            id="email"
            value={email}
            name="email address"
            onChange={handleInputChange}
            type="text"
            placeholder="Add a valid email here."
            className={`${contactStyles.inputStyling}`}
            onBlur= {validate}
          />
          <textarea
            id="message"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Please type your message here."
            className={`${contactStyles.inputStyling}`}
            onBlur= {validate}
          />
          <button className={`${contactStyles.button}`} type="submit">
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className={`${contactStyles.errortext}`}>{errorMessage}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
