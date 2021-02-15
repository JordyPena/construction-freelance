import React from "react";
import "../styling/Contact.css";
function Contact() {
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
              required
            />
            <label for="phone-input">Phone number</label>
            <input
              placeholder="971-218-5250"
              className="phone-input"
              type="text"
              name="phone"
              required
            />
            <label for="email-input">Email</label>
            <input
              placeholder="jStraub@construction.com"
              className="email-input"
              type="text"
              name="email"
              required
            />
            <label for="subject">Building Size</label>
            <input
              placeholder="1500sq ft"
              className="subject"
              type="text"
              name="email"
              required
            />
            <label for="message">Message</label>
            <textarea
              placeholder="Lets chat!"
              className="message"
              name="message"
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
