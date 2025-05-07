import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import logo from "../assets/images/logo.png";
import "../index.css";
// import { Button } from 'antd';

const Renternavbar = () => {
    const navigation = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [isProfileClicked, setIsProfileClicked] = useState(false); // State to toggle profile view
    const fullname = localStorage.getItem('fullname')
    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('fullname')
        localStorage.removeItem('role')
        localStorage.removeItem('email')
        navigation("/")
    }
    const handleProfileClick = () => {
        setIsProfileClicked(true); // Set the profile view to true
        navigation("/renterdashboard/renterprofile"); // Redirect to the user profile page
    };
    return (
        <header id="head">
            <nav className="navbar flex justify-between items-center  bg-white ">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="h-20 w-55" />
                </NavLink>

                {/* Hamburger Menu Button */}
                <button className="md:hidden text-2xl p-2 focus:outline-none" onClick={toggleMenu}>
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                {/* Mobile Navigation Overlay */}
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 z-40" onClick={toggleMenu}></div>
                )}

                {/* Navigation Links */}
                <ul className={`fixed md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row gap-4 md:gap-6 items-center 
                    transition-all duration-300 ease-in-out z-50
                    ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>

                    <li className="py-2 md:py-0 text-lg"><NavLink to="/renterdashboard" className="hover:text-blue-500">Home</NavLink></li>
                    <li className="py-2 md:py-0 text-lg"><NavLink to="/renterdashboard/addbooking" className="hover:text-blue-500">Add Booking</NavLink></li>
                    <li className="py-2 md:py-0 text-lg"><NavLink to="/renterdashboard/vehiclecategory" className="hover:text-blue-500">Vehicles</NavLink></li>
                    {/* <li className="py-2 md:py-0 text-lg"><NavLink to="/renterdashboard/managebooking" className="hover:text-blue-500">Manage Bookings</NavLink></li> */}
                    <li className="py-2 md:py-0 text-lg"><NavLink to="/renterdashboard/mybooking" className="hover:text-blue-500">My Bookings</NavLink></li>
                    <div className="relative group inline-block p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
                        {/* Display fullname with styling */}
                        <li className="py-2 md:py-0 text-lg">
                            <NavLink to="/renterdashboard/renterprofile" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all border-2 border-gray-300 hover:border-blue-500 rounded-lg !px-4 !py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform transition-all duration-300 group-hover:scale-105">
                                {fullname}
                            </NavLink>
                        </li>

                        {/* Dropdown menu shown on hover only */}
                        <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all ease-out duration-300 z-50">
                            <li className="hover:bg-gray-50 transition duration-200">
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-6 py-3 text-sm text-red-600 font-medium rounded-b-lg hover:bg-blue-50"
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>



                    {/* <li className="py-2 md:py-0 text-lg"><NavLink to="/contact" className="hover:text-blue-500">Contact Us</NavLink></li> */}
                </ul>
            </nav>

        </header>
    );
};

export default Renternavbar;
