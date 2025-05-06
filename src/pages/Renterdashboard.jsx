import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import { Outlet, useNavigate } from 'react-router';
import Renternavbar from '../components/Renternavbar';

const Renterdashboard = () => {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== 'renter') {
      navigate('/');
    }
  }, [role, navigate]);

  if (role !== 'renter') return null; // Prevent rendering if redirecting

  return (
    <>
      <Renternavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Renterdashboard;
