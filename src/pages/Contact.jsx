import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import validEmail from "../helpers/helpers";
import contactStyles from "../css/contact.module.css"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("");


  const handleInputChange = (e) => {

    const id = e.target.id;
    const inputValue = e.target.value;

    switch (id) {
      case 'name': setName(inputValue);
      break;
      case 'email': 
      if(inputValue && !validEmail(inputValue)) {
        setErrorMessage("Please enter a valid email!");
        return;
      } else {
        setEmail(inputValue)
      }
      break;
      case 'message': setMessage(inputValue)
      break;
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    alert('Message has been sent!')
  }

  return (
    <>
      <Header />
      <div>
        <h1>Contact Page</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            id= "name"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Type your name here."
          />
          <input
          id = "email"
            value={email}
            name="email address"
            onChange={handleInputChange}
            type="text"
            placeholder="Add a valid email address here."
          />
          <textarea
          id = "message"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Please type your message here."
          />
          <button type="submit">Submit</button>
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
