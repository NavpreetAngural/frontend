import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import axios from 'axios';
import { baseURL } from '../../config';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Renterfooter from '../components/Renterfooter';

const Vehicletype = () => {
  const { type } = useParams(); // car, bike, etc.
  const [vehicles, setVehicles] = useState([]);
  const role = localStorage.getItem('role')

  useEffect(() => {
    axios.get(`${baseURL}/vehicle/type/${type}`)
      .then(res => setVehicles(res.data))
      .catch(err => console.error(err));
  }, [type]);

  return (
  <>
    {role == 'renter'  ? "" : <Navbar /> }

    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <h2 className="text-4xl font-semibold text-center !m-8 text-indigo-600">
        All {type}s Available
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 !m-8">
        {vehicles.map(v => (
          <div key={v._id} className="bg-white rounded-lg !pb-3 shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden ">
            <img
             src={`https://drive-dash-backend.onrender.com/api/uploads/${v.vehicleImage}`}
              alt={v.vehicleName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{v.vehicleName}</h3>
              <p className="text-sm text-gray-500 mb-2 text-center">Type: {v.vehicleType}</p>
              <p className="text-lg text-gray-700 font-semibold text-center">₹{v.rentPerDay} / day</p>
              <center><button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 item-">
                <Link to="/renterdashboard/addbooking">Book Now</Link>
              </button></center>

            </div>
          </div>
        ))}
      </div>
    </div>
    {role == 'renter'  ? "" : <Renterfooter /> }
  </>
  );
};

export default Vehicletype;
