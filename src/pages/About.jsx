import React from 'react';
import men_1 from "../assets/images/men_1.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly  !py-6 gap-y-6">
        {/* Left Column */}
        <div className="w-full md:w-[48%] flex flex-col gap-5">
          <div className="bg-white rounded-lg !p-6 h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Company Overview</h1>
            <p className="!mt-2 text-base !px-4">
              Founded in 2025, DriveDash is a trusted online vehicle rental platform dedicated to providing seamless and affordable rental experiences. Our mission is to make transportation accessible for everyone, whether you’re traveling for business, leisure, or adventure.
            </p>
          </div>
          <div className="bg-white rounded-lg !p-6 h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Our Mission and Vision</h1>
            <p className="!mt-2 text-base !px-4">
              Our mission is to provide affordable, reliable, and eco-friendly vehicle rental solutions. Also to become the most trusted vehicle rental platform worldwide.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[48%] flex flex-col gap-5">
          <div className="bg-white rounded-lg !p-6 h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Our Story</h1>
            <p className="!mt-2 text-base !px-4">
              Our journey began with a simple idea: to revolutionize the way people rent vehicles. Frustrated by the lack of transparency and convenience in traditional rental services, our founders set out to create a platform that prioritizes customer satisfaction and innovation. Today, we serve thousands of happy customers across the globe.
            </p>
          </div>
          <div className="bg-white rounded-lg !p-4 h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Core Values</h1>
            <ul className="text-base !px-4 text-left">
              <li><b>Customer-Centric:</b> We put our customers first in everything we do.</li>
              <li><b>Transparency:</b> No hidden fees, no surprises.</li>
              <li><b>Sustainability:</b> We’re committed to reducing our environmental impact.</li>
              <li><b>Innovation:</b> Constantly improving to deliver the best experience.</li>
            </ul>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="w-[100%] flex flex-col items-center !py-4">
          <h1 className="text-xl font-bold !mb-4">Meet the Team</h1>
          <div className="flex flex-wrap justify-around gap-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="divss w-[100%]">
                <img src={men_1} alt="team member" className="w-full !h-auto" />
                <div className="text-center">
                  <h3 className="font-bold text-lg">John</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="w-full md:w-[50%]">
          <div className="bg-white rounded-lg  h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">What Sets Us Apart</h1>
            <ul className="text-base  text-center">
              <li>Wide range of vehicles to suit every need</li>
              <li>24/7 customer support for peace of mind</li>
              <li>Affordable pricing with no hidden fees</li>
              <li>Eco-friendly options for sustainable travel</li>
            </ul>
          </div>
        </div>

        {/* Achievements and Milestones */}
        <div className="w-full md:w-[50%]">
          <div className="bg-white rounded-lg  h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Achievements and Milestones</h1>
            <ul className="text-base  text-center">
              <li><b>Number of customers served:</b> 5000+ Happy Customers</li>
              <li><b>Awards or recognitions:</b> Best Car Rental Platform 2024</li>
              <li><b>Partnerships or collaborations:</b> Collaborations with brands and insurance companies</li>
            </ul>
          </div>
        </div>

        {/* Testimonials */}
        <div className="w-full flex flex-col items-center !py-4">
          <h1 className="text-xl font-bold !mb-4">Testimonials</h1>
          <div className="flex flex-wrap justify-center gap-16">
            {[5, 4, 5].map((stars, i) => (
              <div key={i} className="divss w-60">
                <img src={men_1} alt="testimonial" className="w-full !h-auto" />
                <div className="text-center">
                  <h3>John</h3>
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className={`fa fa-star ${idx < stars ? 'checked' : ''}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
