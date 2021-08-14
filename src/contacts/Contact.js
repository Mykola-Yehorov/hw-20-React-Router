import React from "react";

const Contact = ({firstName, lastName, phone, gender, id}) => {
  return (
      <div className="contact">
        <div className="contact__info">
          <div className="name"> 
            <span className="firstName">{firstName} </span>
            <span className="lastName">{lastName} </span>
          </div>
          <div className="phone"> {phone} </div>
        </div>       
      </div>

    )
  }

  export default Contact;