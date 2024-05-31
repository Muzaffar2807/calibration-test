import React from "react";
import "./Home.scss";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin, FaPinterestSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div className="main-home-container">
      <p>
        <span style={{ color: "#ccc" }}> Home / Who we are </span>/Contact
      </p>

      <div className="contact-div">
        <h1 style={{ color: "#ff6404", marginBottom: "1rem" }}>Contact</h1>
        <p style={{ color: "grey", lineHeight: "24px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          praesentium saepe necessitatibus id sint voluptas, modi veniam eveniet
          eius cupiditate doloribus molestiae. Dolor possimus architecto
          voluptates omnis sunt modi illo.
        </p>
      </div>

      <div className="contact-us-form-div">
        <div className="left-div">
          <h1
            style={{
              color: "#ff6404",
              marginBottom: "1rem",
              fontWeight: "400",
              borderBottom: "5px solid #525252",
            }}
          >
            CONTACT US
          </h1>
          <div className="input-fields">
            <input type="text" placeholder="Name *" className="name-input" />
            <div className="phone-email">
              <input
                type="number"
                placeholder="Phone *"
                className="inputs-phone"
              />
              <input
                type="email"
                placeholder="Email *"
                className="inputs-email"
              />
            </div>
            <textarea placeholder="Message * " className="message-input" />{" "}
            <br />
            <button>Submit</button>
          </div>
        </div>

        <div className="right-div">
          <h1
            style={{
              color: "#ff6404",
              marginBottom: "1rem",
              fontWeight: "400",
              borderBottom: "5px solid #525252",
            }}
          >
            REACH US
          </h1>
          <p>Coalition Skills Test</p>
          <div>
            <p style={{ marginBottom: "0rem" }}>535 La Plata Street</p>
            <p style={{ marginBottom: "0rem", marginTop: "0" }}>
              4200 Argentina
            </p>
          </div>

          <div>
            <p style={{ marginBottom: "0rem" }}>Phone: 385.154.11.28.38</p>
            <p style={{ marginBottom: "0rem", marginTop: "0" }}>
              Fax: 385.154.35.66.78
            </p>
          </div>

          <div className="social-icons">
            <BiLogoFacebookSquare size={33} />
            <FaSquareTwitter size={33} />
            <FaLinkedin size={33}/>
            <FaPinterestSquare size={33} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
