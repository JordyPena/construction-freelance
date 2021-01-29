import React from 'react'
import '../styling/Contact.css'
function Contact() {

  return (
    <>
      <div>

      <h2>Submit this form so we can contact you</h2>
      <h2>Feel free to call us at 971-218-5250</h2>
      </div>

        <div className="bottom-item">
          <form
            className="contact-form"
            action="https://formspree.io/mgenndrq"
            method="POST"
          >
            <label for="user-name">Name</label>
            <input placeholder="Jess Straub" className="user-name" type="text" name="name" required />
            <label for="phone-input">Phone number</label>
            <input  placeholder="971-218-5250" className="phone-input" type="text" name="phone" required />
            <label for="email-input">Email</label>
            <input placeholder="jStraub@construction.com" className="email-input" type="text" name="email" required />
            <label for="subject">Building Size</label>
            <input  placeholder="1500sq ft" className="subject" type="text" name="email" required />
            <label for="message">Message</label>
            <textarea placeholder="Lets chat!" className="message" name="message" required></textarea>
            <button className="contact-button" type="submit">
              Submit
            </button>
          </form>
        </div>
    </>
  )
}

export default Contact
