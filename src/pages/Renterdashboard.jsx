import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Renternavbar from '../components/Renternavbar';
import Renterfooter from '../components/Renterfooter';

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
      <Renterfooter />
    </>
  );
};

export default Renterdashboard;
