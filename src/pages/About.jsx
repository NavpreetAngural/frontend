import React from 'react'
import men_1 from "../assets/images/men_1.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css"

const About = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "space-evenly", flexWrap: "wrap", backgroundColor: "lightblue" }}>
        <div style={{ width: "48%", display: "flex", flexWrap: "wrap", rowGap: "20px", paddingTop: "20px" }}>
          <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "30px", height: "200px" }}>
            <center><h1 style={{ color: "black", fontSize: "1.5rem", fontWeight: "bold" }}>Company Overview</h1>
              <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}>Founded in 2025, DriveDash is a trusted online vehicle rental platform dedicated to providing seamless and affordable rental experiences. Our mission is to make transportation accessible for everyone, whether you’re traveling for business, leisure, or adventure.</p>
            </center>
          </div>
          <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "40px", height: "200px" }}>
            <center><h1 style={{ color: "black", fontSize: "1.5rem", fontWeight: "bold" }}>Our Mission and Vision</h1>
              <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}>our mission is to provide affordable, reliable, and eco-friendly vehicle rental solutions. Also to become the most trusted vehicle rental platform worldwide. </p>
            </center>
          </div>

        </div>
        <div style={{ width: "48%", display: "flex", flexWrap: "wrap", rowGap: "20px", paddingTop: "20px" }}>
          <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "20px", height: "200px" }}>
            <center><h1 style={{ color: "black", fontSize: "1.5rem", fontWeight: "bold" }}>Our Story</h1>
              <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}>Our journey began with a simple idea: to revolutionize the way people rent vehicles. Frustrated by the lack of transparency and convenience in traditional rental services, our founders set out to create a platform that prioritizes customer satisfaction and innovation. Today, we serve thousands of happy customers across the globe.</p>
            </center>
          </div>
          <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "10px", height: "200px" }}>
            <center><h1 style={{ color: "black", fontSize: "1.5rem", fontWeight: "bold" }}>Core Values</h1>
              <ul>
                <li>
                  <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}> <b>Customer-Centric :</b> We put our customers first in everything we do.</p>
                  <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}> <b>Transparency :</b> No hidden fees, no surprises.</p>
                  <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}> <b>Sustainability :</b> We’re committed to reducing our environmental impact</p>
                  <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}> <b>Innovation :</b> Constantly improving to deliver the best experience.</p>
                </li>
              </ul>
            </center>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap", margin: "20px", justifyContent: "space-around" }}>
          <div style={{ width: "100%", paddingBottom: "20px", fontSize: "1.3rem", fontWeight: "bold" }} ><center><h1>Meet the Team </h1></center></div>
          <div className="divss">
            <img src={men_1} alt="men" />
            <center>
              <h3 style={{ padding: "3px", fontWeight: "bold", fontSize: "1.1rem" }}> John </h3>
              <p style={{ padding: "3px", paddingTop: 0 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            </center>
          </div>
          <div className="divss">
            <img src={men_1} alt="men" />
            <center>
              <h3 style={{ padding: "3px", fontWeight: "bold", fontSize: "1.1rem" }}> John </h3>
              <p style={{ padding: "3px", paddingTop: 0 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            </center>
          </div>
          <div className="divss">
            <img src={men_1} alt="men" />
            <center>
              <h3 style={{ padding: "3px", fontWeight: "bold", fontSize: "1.1rem" }}> John </h3>
              <p style={{ padding: "3px", paddingTop: 0 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            </center>
          </div>
          <div className="divss">
            <img src={men_1} alt="men" />
            <center>
              <h3 style={{ padding: "3px", fontWeight: "bold", fontSize: "1.1rem" }}> John </h3>
              <p style={{ padding: "3px", paddingTop: 0 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            </center>
          </div>
        </div>
        <div style={{ width: "48%", display: "flex", flexWrap: "wrap", rowGap: "20px", paddingTop: "0" }}>
          <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "12px", height: "200px" }}>
            <center><h1 style={{ color: "black", fontSize: "1.5rem", fontWeight: "bold" }}>What Sets Us Apart</h1>
              <ul >
                <li style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}>Wide range of vehicles to suit every need</li>
                <li style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}>24/7 customer support for peace of mind</li>
                <li style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}>Affordable pricing with no hidden fees.</li>
                <li style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}>Eco-friendly options for sustainable travel.</li>
              </ul>
            </center>
          </div>
        </div>
        <div style={{ width: "48%", display: "flex", flexWrap: "wrap", rowGap: "20px", paddingTop: "0" }}>
          <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "28px", height: "200px" }}>
            <center><h1 style={{ color: "black", fontSize: "1.5rem", fontWeight: "bold" }}>Achievements and Milestones</h1>
              <ul>
                <li>
                  <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}> <b>Number of customers served:</b> 5000+ Happy Customers</p>
                  <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}> <b>Awards or recognitions :</b> Best Car Rental Platform 2024</p>
                  <p style={{ margin: "10px 30px 10px 30px", fontSize: "1rem" }}> <b>Partnerships or collaborations:</b> Wecollaborations with brands, insurance companies</p>
                </li>
              </ul>
            </center>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap", margin: "20px", justifyContent: "space-around", padding: "10px", paddingTop: "0" }}>
          <div style={{ width: "100%", paddingBottom: "10px", fontSize: "1.3rem", fontWeight: "bold", }}> <center>Testimonials</center> </div>
          <div className="divss">
            <img src={men_1} alt="men" />
            <center>
              <h3> John </h3>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </center>
          </div>
          <div className="divss">
            <img src={men_1} alt="men" />
            <center>
              <h3> John </h3>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star " />
            </center>
          </div>
          <div className="divss">
            <img src={men_1} alt="men" />
            <center>
              <h3> John </h3>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
