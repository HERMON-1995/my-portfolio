import "./Form.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
       <form action="https://formspree.io/f/mpzewdrj" method="post">
         <label>Name</label>
         <input type="text" name="user_name" required></input>
         <label>Email</label>
         <input type="email" name="user_email" required></input>
         <label>Subject</label>
         <input type="text" required></input>
         <label>Message</label>
         <textarea rows="6" placeholder="Type your message here" name="user_message" required></textarea>
         <button type="submit" className="btn">Submit</button>
       </form>
    </div>
  )
}

export default Form;