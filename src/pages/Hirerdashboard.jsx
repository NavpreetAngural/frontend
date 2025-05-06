import React, { useEffect } from 'react';
import Hirernavbar from '../components/Hirernavbar';
import Footer from '../components/Footer';
import { Outlet, useNavigate } from 'react-router';

const Hirerdashboard = () => {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== 'hirer') {
      navigate('/');
    }
  }, [role, navigate]);

  if (role !== 'hirer') return null; // Prevent rendering if redirecting

  return (
    <>
      <Hirernavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Hirerdashboard;
