import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NavLink ,useNavigate} from 'react-router'; 
import logo from "../assets/images/logo.png";
import "../index.css";
import Login from './Login';
import Register from './Register';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // 

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLoginSuccess = () => {
        setIsModalOpen(false);     
        navigate('/');              
    };

    return (
        <header id="head">
            <nav className="navbar flex justify-between items-center shadow-md bg-white ">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="h-20 w-60" />
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
                <ul className={`fixed md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row gap-4 md:gap-10 items-center 
                    transition-all duration-300 ease-in-out z-50
                    ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>

                    <li className="py-2 md:py-0 text-lg"><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
                    <li className="py-2 md:py-0 text-lg"><NavLink to="/vehiclecategory" className="hover:text-blue-500">Vehicles</NavLink></li>
                    {/* <li className="py-2 md:py-0 text-lg"><NavLink to="/addvehicle" className="hover:text-blue-500">Add Vehicle</NavLink></li> */}
                    <li className="py-2 md:py-0 text-lg"><NavLink to="/Addbooking" className="hover:text-blue-500">Add Booking</NavLink></li> 
                    <li className="py-2 md:py-0 text-lg"><NavLink to="/about" className="hover:text-blue-500">About Us</NavLink></li>
                    <li className="py-2 md:py-0 text-lg"><NavLink to="/contact" className="hover:text-blue-500">Contact Us</NavLink></li>

                    <Button type="primary" onClick={showModal} className="mt-2 md:mt-0 text-lg">Login / Signup</Button>
                </ul>
            </nav>

            {/* Login/Signup Modal */}
            <Modal
                className='text-xl backdrop-blur-md bg-opacity-30'
                width={500}
                footer={null}
                open={isModalOpen}
                onCancel={handleCancel}
            >
                <div className="flex flex-col items-center p-6">
                    {isLogin ? (
                        <>
                            <h2 className="text-2xl font-bold mb-5">Login</h2>
                            <Login onSuccess={handleLoginSuccess} /> {/* ✅ pass callback */}
                            <p className="mt-4 text-sm">
                                Don't have an account? <button onClick={() => setIsLogin(false)} className="text-blue-500 font-semibold">Sign up</button>
                            </p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                            <Register onRegisterSuccess={() => setIsLogin(true)}/>
                            <p className="mt-4 text-sm">
                                Already have an account? <button onClick={() => setIsLogin(true)} className="text-green-500 font-semibold">Login</button>
                            </p>
                        </>
                    )}
                </div>
            </Modal>
        </header>
    );
};

export default Navbar;
