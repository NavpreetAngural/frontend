import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Addbooking from "./pages/Addbooking";
import Addvehicle from "./pages/Addvehicle";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hirerdashboard from "./pages/Hirerdashboard";
import Renterdashboard from "./pages/Renterdashboard";
import Vehiclecategory from "./pages/Vehiclecategory";
import Vehicletype from "./pages/Vehicletype";
import Viewbookings from "./pages/Viewbookings";
import Managevehicles from "./pages/Managevehicles";
import Hirerprofile from "./pages/Hirerprofile";
import Renterprofile from "./pages/Renterprofile";
import HirerHome from "./pages/Hirerhome";
import RenterHome from "./pages/Renterhome";
import Mybookings from "./pages/Mybookings";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="471156270541-1avjtg658ildqc24v79jaja9oc3k3pn5.apps.googleusercontent.com">
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={true}
          // closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/addbooking" element={<Addbooking />} />
          <Route path="/addvehicle" element={<Addvehicle />} />
          <Route path="/vehiclecategory" element={<Vehiclecategory />} />
          <Route path="/vehicle/:type" element={<Vehicletype />} />
          <Route path="/renterdashboard" element={<Renterdashboard />}>
            <Route index element={<RenterHome />} /> {/* Renders on "/hirer" */}
            <Route path="vehiclecategory" element={<Vehiclecategory />} />
            <Route path="vehicle/:type" element={<Vehicletype />} />
            <Route path="addbooking" element={<Addbooking />} />
            <Route path="viewbooking" element={<Viewbookings />} />
            <Route path="renterprofile" element={<Renterprofile />} />
            <Route path="mybooking" element={<Mybookings />} />
          </Route>
          <Route path="/hirerdashboard" element={<Hirerdashboard />}>
            <Route index element={<HirerHome />} /> {/* Renders on "/hirer" */}
            <Route path="addvehicle" element={<Addvehicle />} />
            {/* <Route path="vehicle/:type" element={<Vehicletype />} /> */}
            {/* <Route path="addbooking" element={<Addbooking />} /> */}
            <Route path="viewbooking" element={<Viewbookings />} />
            <Route path="managevehicle" element={<Managevehicles />} />
            <Route path="hirerprofile" element={<Hirerprofile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
