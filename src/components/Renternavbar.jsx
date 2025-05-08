import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import logo from "../assets/images/logo.png";
import "../index.css";

const Renternavbar = () => {
    const navigation = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const fullname = localStorage.getItem('fullname');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('fullname');
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        navigation('/');
    };

    const handleProfileClick = () => {
        setIsProfileClicked(true);
        navigation('/renterdashboard/renterprofile');
    };

    // Close the hamburger menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);  // Close the menu on link click
    };

    return (
        <header id="head">
            <nav className="navbar flex justify-between items-center bg-white !px-4 !py-2 shadow-md">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="h-20 w-auto" />
                </NavLink>

                {/* Hamburger */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                {/* Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-opacity-30 z-40"
                        onClick={toggleMenu}
                    ></div>
                )}

                {/* Navigation Links */}
                <ul
                    className={`fixed md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center gap-4 md:gap-6 z-50 transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'block' : 'hidden md:flex'
                    }`}
                >
                    <li className="!py-2 md:!py-0 text-lg">
                        <NavLink to="/renterdashboard" className="nav-link" onClick={handleLinkClick}>
                            Home
                        </NavLink>
                    </li>
                    <li className="!py-2 md:!py-0 text-lg">
                        <NavLink to="/renterdashboard/addbooking" className="nav-link" onClick={handleLinkClick}>
                            Add Booking
                        </NavLink>
                    </li>
                    <li className="!py-2 md:!py-0 text-lg">
                        <NavLink to="/renterdashboard/vehiclecategory" className="nav-link" onClick={handleLinkClick}>
                            Vehicles
                        </NavLink>
                    </li>
                    <li className="!py-2 md:!py-0 text-lg">
                        <NavLink to="/renterdashboard/mybooking" className="nav-link" onClick={handleLinkClick}>
                            My Bookings
                        </NavLink>
                    </li>

                    <li className="relative group !p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
                        {isProfileClicked ? (
                            <button
                                onClick={handleLogout}
                                className="text-lg font-semibold text-red-600 hover:text-white hover:bg-red-500 border-2 border-red-500 rounded-lg bg-white shadow-lg transform transition-all duration-300"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={handleProfileClick}
                                className="font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 border-2 border-gray-300 hover:border-blue-500 rounded-lg shadow-lg transition-all duration-300"
                            >
                                {fullname}
                            </button>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Renternavbar;
