import React from 'react';
import { Link } from 'react-router'; // Fixed import
import { CalendarCheck, Car, LifeBuoy, Gauge, Users } from 'lucide-react';

const HirerHome = () => {
  const fullname = localStorage.getItem('fullname');
  const role = localStorage.getItem('role');

  return (
    <div className="min-h-screen !px-8 !py-12 flex justify-center ">
      <div className="max-w-7xl w-full">
        {/* Welcome Banner */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl !p-10 text-center  !mb-16">
          <h1 className="text-4xl font-bold text-gray-800 !mb-2">Welcome, {fullname} 👋</h1>
          <p className="text-xl text-gray-700">
            Role: <span className="text-blue-600 font-semibold">{role}</span>
          </p>
          <p className="!mt-4 text-gray-600 text-lg italic">
            "Ready to manage your fleet and drive success? Let’s get started!"
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 !gap-6 !mb-16">
          <div className="bg-white/70 rounded-xl !p-6 shadow text-center">
            <Gauge className="text-indigo-600 mx-auto !mb-3" size={32} />
            <h3 className="text-xl font-semibold">Total Vehicles</h3>
            <p className="text-3xl font-bold text-gray-700 !mt-2">12</p>
          </div>
          <div className="bg-white/70 rounded-xl !p-6 shadow text-center">
            <CalendarCheck className="text-green-600 mx-auto !mb-3" size={32} />
            <h3 className="text-xl font-semibold">Bookings</h3>
            <p className="text-3xl font-bold text-gray-700 !mt-2">7</p>
          </div>
          <div className="bg-white/70 rounded-xl !p-6 shadow text-center">
            <Users className="text-purple-600 mx-auto !mb-3" size={32} />
            <h3 className="text-xl font-semibold">Renter Messages</h3>
            <p className="text-3xl font-bold text-gray-700 !mt-2">3</p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-12">
          {/* My Bookings */}
          <Link
            to="/hirer/bookings"
            className="group bg-white/60 backdrop-blur-lg border border-gray-200 !p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 !mb-6">
              <CalendarCheck className="text-blue-600 group-hover:text-blue-800" size={36} />
              <h3 className="text-2xl font-semibold text-gray-800">My Bookings</h3>
            </div>
            <p className="text-gray-600 text-lg">
              View and manage all your bookings in one place.
            </p>
          </Link>

          {/* Add Vehicle */}
          <Link
            to="/hirerdashboard/addvehicle"
            className="group bg-white/60 backdrop-blur-lg border border-gray-200 !p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 !mb-6">
              <Car className="text-green-600 group-hover:text-green-800" size={36} />
              <h3 className="text-2xl font-semibold text-gray-800">Add Vehicle</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Easily add new vehicles to your fleet.
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
              Need help? Reach out to our support team.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HirerHome;
