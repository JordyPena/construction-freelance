import React, {useState} from "react";
import "../styling/Contact.css";
function Contact() {
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [buildingInput, setBuildingInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const handleInputFields = (event) => {
    if (event.target.name === 'email') {
      setEmailInput(event.target.value)
    } else if (event.target.name === 'name') {
      setNameInput(event.target.value)
    } else if (event.target.name === 'phone') {
      setPhoneInput(event.target.value)
    } else if (event.target.name === 'building') {
      setBuildingInput(event.target.value)
    } else if (event.target.name === 'message') {
      setMessageInput(event.target.value)
    }
  }
  return (
    <>
      <div className="contact-container">
        <div className="top-item">
          <div className="mt-image2">
            <img
              className="mt-hood2"
              src="/images/mt-hood2.jpg"
              alt="mt hood"
            />
          </div>
          <div className="header-container">
            <h2 className="contact-headers">
              Submit this form so we can contact you
            </h2>
            <h2 className="contact-headers">
              Feel free to call us at 971-218-5250
            </h2>
          </div>
        </div>

        <div className="bottom-item">
          <form
            className="contact-form"
            action="https://formspree.io/mgenndrq"
            method="POST"
          >
            <label for="user-name">Name</label>
            <input
              placeholder="Jess Straub"
              className="user-name"
              type="text"
              name="name"
              value={nameInput}
              onChange={handleInputFields}
              required
            />
            <label for="phone-input">Phone number</label>
            <input
              placeholder="971-218-5250"
              className="phone-input"
              type="text"
              name="phone"
              value={phoneInput}
              onChange={handleInputFields}
              required
            />
            <label for="email-input">Email</label>
            <input
              placeholder="jStraub@construction.com"
              className="email-input"
              type="text"
              name="email"
              value={emailInput}
              onChange={handleInputFields}
              required
            />
            <label for="subject">Building Size</label>
            <input
              placeholder="1500sq ft"
              className="subject"
              type="text"
              name="building"
              value={buildingInput}
              onChange={handleInputFields}
              required
            />
            <label for="message">Message</label>
            <textarea
              placeholder="Lets chat!"
              className="message"
              name="message"
              value={messageInput}
              onChange={handleInputFields}
              required
            ></textarea>
            <button className="contact-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
