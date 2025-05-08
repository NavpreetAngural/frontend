import React from 'react';
import { NavLink } from 'react-router';
import '../index.css';

const Renterfooter = () => {
    return (
        <footer className="bg-gray-800 text-white !py-10 !px-5 !mt-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between !gap-11">

                {/* Social Media Links */}
                <div className="flex-1 text-center">
                    <h2 className="text-xl font-semibold !mb-4">Social Media</h2>
                    <ul className="flex flex-col items-center !gap-y-3">
                        <li>
                            <i className="fa-brands fa-facebook mr-2" />
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                facebook.com
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-twitter mr-2" />
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                twitter.com
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-instagram mr-2" />
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                instagram.com
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-youtube mr-2" />
                            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                youtube.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Internal Links */}
                <div className="flex-1 text-center">
                    <h2 className="text-xl font-semibold !mb-4">Quick Links</h2>
                    <ul className="flex flex-col items-center !gap-y-3">
                        <li><NavLink to="/vehicles" className="hover:underline">Vehicles</NavLink></li>
                        <li><NavLink to="/bookings" className="hover:underline">My Bookings</NavLink></li>
                        <li><NavLink to="/aboutUs" className="hover:underline">Add Booking</NavLink></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex-1 text-center">
                    <h2 className="text-xl font-semibold !mb-4">Contact Info</h2>
                    <ul className="flex flex-col items-center !gap-y-3">
                        <li>
                            <i className="fa-solid fa-envelope mr-2" />
                            <a href="mailto:drivedash@gmail.com" className="hover:underline">drivedash@gmail.com</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone mr-2" />
                            <a href="tel:+91998876655" className="hover:underline">+91 99887 6655</a>
                        </li>
                        <li>
                            Have questions? <NavLink to="/contact" className="text-blue-400 hover:underline">Contact us</NavLink> — we’re here to help!
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center !mt-10 border-t border-gray-600 !pt-4 text-sm">
                <p>&copy; {new Date().getFullYear()} Made by <span className="underline">Navpreet</span></p>
            </div>
        </footer>
    );
};

export default Renterfooter;
