import React, { useEffect, useState } from 'react'
import car6 from "../assets/images/car6.jpg"
import car5 from "../assets/images/car5.jpg"
import car7 from "../assets/images/car7.jpg"
import car8 from "../assets/images/car8.jpg"
import foot_banner from "../assets/images/foot_banner.avif"
import men_1 from "../assets/images/men_1.jpg"
import banner_1 from "../assets/images/banner_1.png"
import banner_4 from "../assets/images/banner_4.png"
import { NavLink } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css"
import { baseURL } from '../../config'
import axios from 'axios'


const Home = () => {

    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        viewVehicles()
    }, [])
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const blockVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            transition: { delay: index * 0.2, duration: 0.3 } // Delay each block by 0.2s
        })
    };
    const viewVehicles = async () => {
        try {
            const response = await axios.get(`${baseURL}/vehicle/view`)
            setVehicles(response.data)
            console.log(response.data)
        }
        catch (err) {
            console.log("failed to display vehicles");
        }
    }

    return (

        <>
            <Navbar />
            <div className="bg-gradient-to-t from-white to-[rgb(180,215,228)]">
                <main >
                    <one-section >
                        <div className="w-full mx-0 px-0 flex flex-col items-center justify-center">
                            <div className="w-[100%]" >
                                <Slider {...settings}>
                                    <div>
                                        <img src={banner_1} alt="Slide 1" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <img src={car5} alt="Slide 2" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <img src={car6} alt="Slide 3" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <img src={banner_4} alt="Slide 4" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <img src={car7} alt="Slide 5" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <img src={car8} alt="Slide 6" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
                                        />
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </one-section>

                    <two-section> <div className="w-full mt-5 mb-5 flex justify-around">
                        <div style={{ width: "100%", paddingTop: 25, marginBottom: 30 }}>
                            <center>
                                <h1
                                    style={{
                                        display: "inline",
                                        boxShadow: "1px 1px 1px",
                                        padding: 8,
                                        backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                                        borderRadius: 10,
                                    }}
                                >
                                    Featured Vehicles
                                </h1>
                            </center>
                        </div>
                    </div>
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ amount: 0.2 }}
                            className="flex items-center justify-center rounded-lg container w-full px-5 mt-5"
                        >
                            {/* Title Section */}


                            {/* Vehicles Grid with Individual Animation */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-6 pt-5 justify-around">
                                {vehicles.map((vehicle, index) => (
                                    <motion.div
                                        key={index}
                                        className="divs flex flex-col items-center p-4"
                                        variants={blockVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.2 }}
                                        custom={index} // Pass index for staggered effect
                                    >
                                        <img src={`https://drive-dash-backend.onrender.com/api/uploads/${vehicle.vehicleImage}`} alt="Vehicle" className="h-[150px] w-[150px] rounded-md" />
                                        <h3 className="text-lg font-semibold mt-2">{vehicle.vehicleName}</h3>
                                        <h3 className="text-lg">{vehicle.rentPerDay} rs.</h3>
                                        <button className="bg-gray-300 w-[100px] h-[30px] text-black rounded-lg mt-2 hover:bg-gray-400 transition-all">
                                            <NavLink to="/addbooking"> Add Booking</NavLink>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>;

                    </two-section>

                    <third-section>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ amount: 0.2 }} // Ensures animation starts when 20% of section is visible
                            className="container-2"
                        >
                            <div style={{ width: "100%", padding: 25 }}>
                                <center>
                                    <h1
                                        style={{
                                            display: "inline",
                                            boxShadow: "1px 1px 1px",
                                            padding: 8,
                                            backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                                            borderRadius: 10
                                        }}
                                    >
                                        Why Choose Us ?
                                    </h1>
                                </center>
                            </div>
                            <div className="left-section">
                                <ul>
                                    <li>
                                        <h2>
                                            {" "}
                                            <i className="fa-solid fa-car"> </i> Wide Range of Vehicles
                                        </h2>
                                    </li>
                                    <p>
                                        Choose from a diverse fleet of vehicles, including cars, bikes,
                                        scooters, SUVs.
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-mobile-retro"> </i> Easy Online
                                            Booking
                                        </h2>
                                    </li>
                                    <p>
                                        Book your vehicle in just a few clicks with our user-friendly
                                        platform."
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-seedling" /> Environmentally Friendly
                                            Options
                                        </h2>
                                    </li>
                                    <p>
                                        Choose from our range of eco-friendly vehicles, including electric
                                        and hybrid cars.
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-wallet" /> Fast and Secure Payments
                                        </h2>
                                    </li>
                                    <p>
                                        Secure payment options with instant confirmation for hassle-free
                                        bookings.
                                    </p>
                                    <br />
                                </ul>
                            </div>
                            <div className="right-section">
                                <ul>
                                    <li>
                                        <h2>
                                            <i className="fa fa-star " /> Positive Customer Reviews
                                        </h2>
                                    </li>
                                    <p>Rated 4.8/5 by thousands of satisfied customers.</p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-money-bill-transfer" /> No Deposit
                                            Required
                                        </h2>
                                    </li>
                                    <p>Enjoy zero deposit requirements on most vehicles</p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-xmark" /> Free Cancellation
                                        </h2>
                                    </li>
                                    <p>
                                        Cancel or modify your booking for free up to 24 hours before
                                        pickup.
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-gear" /> Get Your Own Modified Vehicle
                                        </h2>
                                    </li>
                                    <p>
                                        You can tell us which type of vehicle you wants any type of
                                        customization vehcile
                                    </p>
                                    <br />
                                </ul>
                            </div>
                        </motion.div>
                    </third-section>
                    <forth-section>
                        <div className="container">
                            <div style={{ width: "100%", marginTop: 20 }}>
                                <center>
                                    <h1
                                        style={{
                                            display: "inline",
                                            boxShadow: "1px 1px 1px",
                                            padding: 8,
                                            backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                                            borderRadius: 10
                                        }}
                                    >
                                        Testimonials{" "}
                                    </h1>
                                </center>
                            </div>
                            {/* <div className="divss">
                                <img src={men_1} alt="men" />
                                <center>
                                    <h3> John </h3>
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                            <div className="divss">
                                <img src={men_3} alt="men" />
                                <center>
                                    <h3> John </h3>
                                    <h3> Rating : 4/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star " />
                                </center>
                            </div> */}
                            <div className="divss">
                                <img src={men_1} alt="men" />
                                <center>
                                    <h3> John </h3>
                                    <h3> Rating : 5/5 </h3>
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
                                    <h3> Rating : 5/5 </h3>
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
                                    <h3> Rating : 5/5 </h3>
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
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                        </div>
                    </forth-section>
                    <fifth-section>
                        <div className="container-3">
                            <div style={{ width: "100%" }}>
                                <center>
                                    <h1
                                        style={{
                                            display: "inline",
                                            boxShadow: "1px 1px 1px",
                                            padding: 8,
                                            backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                                            borderRadius: 10
                                        }}
                                    >
                                        Offers{" "}
                                    </h1>
                                </center>
                            </div>
                            <div style={{ width: "75%", alignItems: "center" }}>
                                <img
                                    src={foot_banner}
                                    width="100%"
                                    style={{ borderRadius: 50, boxShadow: "5px 5px 5px black", height: "500px" }}
                                />
                            </div>
                            <div style={{ width: "100%" }}>
                                <center>
                                    <NavLink to="/">
                                        <button style={{ width: "10%", boxShadow: "3px 3px 3px" }}>
                                            {" "}
                                            Sign Up
                                        </button>
                                    </NavLink>
                                    <br />
                                    <br />
                                    <h2 style={{ marginLeft: 15 }}> To get this offer...</h2>
                                </center>
                            </div>
                        </div>
                    </fifth-section>
                </main>
            </div>
            <Footer />
        </>

    )
}

export default Home
