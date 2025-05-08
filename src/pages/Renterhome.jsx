import React from 'react';
import { Link } from 'react-router';
import { CarFront, CalendarDays, LifeBuoy, Gauge, Star } from 'lucide-react';

const RenterHome = () => {
  const fullname = localStorage.getItem('fullname');
  const role = localStorage.getItem('role');

  return (
    <div className="min-h-screen  !py-12 flex justify-center  ">
      <div className="max-w-7xl w-full">
        {/* Welcome Banner */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl !p-10 text-center shadow-xl !mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome, {fullname} 👋</h1>
          <p className="text-xl text-gray-700">Role: <span className="text-green-600 font-semibold">{role}</span></p>
          <p className="mt-4 text-gray-600 text-lg italic">
            "Find your perfect ride and book with ease!"
          </p>
        </div>

        {/* Stats Overview (dummy) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 !gap-6 !mb-16">
          <div className="bg-white/70 rounded-xl !p-6 shadow text-center">
            <Gauge className="text-green-600 mx-auto mb-3" size={32} />
            <h3 className="text-xl font-semibold">Active Bookings</h3>
            <p className="text-3xl font-bold text-gray-700 mt-2">5</p>
          </div>
          <div className="bg-white/70 rounded-xl !p-6 shadow text-center">
            <CarFront className="text-blue-600 mx-auto mb-3" size={32} />
            <h3 className="text-xl font-semibold">Vehicles Rented</h3>
            <p className="text-3xl font-bold text-gray-700 mt-2">8</p>
          </div>
          <div className="bg-white/70 rounded-xl !p-6 shadow text-center">
            <Star className="text-yellow-500 mx-auto mb-3" size={32} />
            <h3 className="text-xl font-semibold">Reviews Left</h3>
            <p className="text-3xl font-bold text-gray-700 mt-2">3</p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-12">
          {/* Browse Vehicles */}
          <Link
            to="/vehicles"
            className="group bg-white/60 backdrop-blur-lg border border-gray-200 !p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 !mb-6">
              <CarFront className="text-blue-600 group-hover:text-blue-800" size={36} />
              <h3 className="text-2xl font-semibold text-gray-800">Browse Vehicles</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Find and book available vehicles near you.
            </p>
          </Link>

          {/* My Bookings */}
          <Link
            to="/renter/bookings"
            className="group bg-white/60 backdrop-blur-lg border border-gray-200 !p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 !mb-6">
              <CalendarDays className="text-green-600 group-hover:text-green-800" size={36} />
              <h3 className="text-2xl font-semibold text-gray-800">My Bookings</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Track and manage your current bookings.
            </p>
          </Link>

          {/* Support */}
          <Link
            to="/contact"
            className="group bg-white/60 backdrop-blur-lg border border-gray-200 !p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 !mb-6">
              <LifeBuoy className="text-purple-600 group-hover:text-purple-800" size={36} />
              <h3 className="text-2xl font-semibold text-gray-800">Support</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Need help? Reach out to our team anytime.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RenterHome;
