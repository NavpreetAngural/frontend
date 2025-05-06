import React from 'react'
import "../index.css"
import { NavLink } from 'react-router'
import "../index.css"
const Footer = () => {
    return (
        <div>
            <footer className="foot">
                {/* <div style={{ width: "100%", marginTop: 20 }}>
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
                            Links
                        </h1>
                    </center>
                </div> */}
                <ul className="foot-links">
                    <li className="li">
                        <NavLink to="/vehicles">Vehicles</NavLink>
                    </li>
                    <li className="li">
                        <NavLink to="/bookings">Bookings</NavLink>
                    </li>
                    <li className="li">
                        <NavLink to="/aboutUs">About Us</NavLink>
                    </li>
                    <li className="li">
                        <NavLink to="/contactUs">Contact Us</NavLink>
                    </li>
                    <li className="li">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                >
                    <div style={{ width: "50%" }}>
                        <center>
                            <h2>Social Media Links : </h2>
                            <br />
                            <i className="fa-brands fa-facebook" />
                            <NavLink to="https://www.facebook.com/" target="blank">
                                www.facebook.com
                            </NavLink>
                            <br />
                            <br />
                            <i className="fa-brands fa-twitter" />
                            <NavLink to="https://twitter.com/" target="_blank">
                                www.twitter.com
                            </NavLink>
                            <br />
                            <br />
                            <i className="fa-brands fa-instagram" />
                            <NavLink to="https://instagram.com/" target="_blank">
                                www.instagram.com
                            </NavLink>
                            <br />
                            <br />
                            <i className="fa-brands fa-youtube" />
                            <NavLink to="https://youtube.com/" target="_blank">
                                www.youtube.com
                            </NavLink>
                            <br />
                            <br />
                        </center>
                    </div>
                    <div style={{ width: "50%" }}>
                        <center>
                            <h2> Contact Info : </h2>
                            <br />
                            <br />
                            <p>
                                <i className="fa-solid fa-envelope" />
                                <NavLink to="mailto:drivedash@gmail.com"> drivedash@gmail.com</NavLink>
                            </p>
                            <br />
                            <p>
                                <i className="fa-solid fa-phone" />
                                <NavLink to="phoneto:+91998876655"> +91998876655</NavLink>
                            </p>
                            <p style={{padding : "30px"}}>Have questions?
                                <NavLink to="/contact"> Contact us </NavLink>
                                —we’re here to help!</p>
                            <br />
                        </center>
                    </div>
                </div>
                <div style={{ width: "100%" }}>
                    <center>
                        <h6>
                            <u>Made by : Navpreet</u>{" "}
                        </h6>
                    </center>
                </div>
            </footer>
        </div>
    )
}

export default Footer
