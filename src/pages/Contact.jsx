import React from 'react'
import contact from "../assets/images/contact.jpg"
import { Form, Input, Button } from "antd";
import { NavLink } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css"
import { baseURL } from '../../config';

const Contact = () => {
    const onFinish = (values) => {
        console.log("Form values:", values);

        axios.post(`${baseURL}/contact/form`, values)
            .then((response) => {
                if (response.data.success) {
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
            });
    };

    return (
        <>
            <Navbar />
            <div className="bg-repeat bg-[length:140%_100%]  bg-fixed  h-[1350px] sm:h-[1380px] md:h-[1450px] lg:h-[1400px]" 
                style={{ backgroundImage: `url(${contact})` }}>

                <main style={{ backgroundColor: 'aliceblue', width: '60%', marginLeft: '40%', height: "auto" }}>
                    <section>
                        <div style={{ padding: '20px', paddingBottom :0 }}>
                            <Form layout="vertical" onFinish={onFinish}>
                                <h1 style={{ textAlign: "center", fontSize: "25px" }}>Contact Form</h1>
                                {/* <Form.Item
                                label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: "Please enter your full name" }]}
                            >
                                <Input placeholder="Enter your full name" />
                            </Form.Item> */}

                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please enter your email" },
                                        { type: "email", message: "Enter a valid email" },
                                    ]}
                                >
                                    <Input placeholder="Enter your email" />
                                </Form.Item>

                                {/* <Form.Item
                                label="Phone No"
                                name="mobile"
                                rules={[{ required: true, message: "Please enter your phone number" }
                                ]}
                            >
                                <Input placeholder="Enter your phone number" maxLength={10} minLength={10}/>
                            </Form.Item> */}

                                <Form.Item
                                    label="Subject"
                                    name="subject"
                                    rules={[{ required: true, message: "Please enter the subject" }]}
                                >
                                    <Input placeholder="Enter the subject" />
                                </Form.Item>

                                <Form.Item
                                    label="Message"
                                    name="message"
                                    rules={[{ required: true, message: "Please enter your message" }]}
                                >
                                    <Input.TextArea placeholder="Enter your query here..." rows={4} />
                                </Form.Item>

                                <Form.Item style={{ textAlign: "center" }}>
                                    <Button type="primary" htmlType="submit">
                                        Send
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </section>

                    <section className="w-full px-6 md:px-36 ">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold !pb-2">Contact Information</h1>
                        </div>

                        {/* Email and Phone */}
                        <section className="w-full !px-6 md:px-36 !py-2 text-lg">
                            <div className="text-center">
                                <i className="fa-solid fa-envelope"></i>
                                <NavLink to="mailto:drivedash@gmail.com"> drivedash@gmail.com</NavLink>                       <div>
                                    <i className="fa-solid fa-phone"></i>
                                    <NavLink to="tel:+91998876655"> +91998876655</NavLink>
                                </div> </div>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center">
                                

                                <div>
                                    <center><h3 className="inline font-semibold ">Address:</h3>
                                        <span className="ml-2">123 Rental Street, Jalandhar, Punjab, 144001, India.</span></center>
                                </div>
                            </div>


                        </section>


                        {/* Google Map */}
                        <div className="p-[10px] flex justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5966.965591930701!2d75.52498360379988!3d31.311537763450662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5ad31d49c681%3A0x646d5633c9705!2sBasti%20Danishmanda%2C%20Jalandhar%2C%20Punjab%20144002!5e0!3m2!1sen!2sin!4v1744716302875!5m2!1sen!2sin"
                                className="w-full md:w-[600px] h-[300px] md:h-[450px] rounded-lg !m-4"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </section>


                    <section className="w-full px-6 md:px-36 py-6 text-lg">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold !pb-6">Operating Hours</h1>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center">
                            <div>
                                <h3 className="font-semibold inline">Monday to Friday :</h3>
                                <span className="ml-2">9:00 AM to 6:00 PM</span>
                            </div>

                            <div>
                                <h3 className="font-semibold inline">Saturday :</h3>
                                <span className="ml-2">10:00 AM to 4:00 PM</span>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <h3 className="font-semibold inline">Sunday :</h3>
                            <span className="ml-2">Closed</span>
                        </div>
                    </section>


                    <section>
                        <div style={{ width: '100%', paddingTop: '20px ' }}>
                            <center>
                                <h1 style={{ paddingBottom: '', fontSize: "25px" , fontWeight : "bold" }}>Social Media Links :</h1>
                                <br />
                                <i className="fa-brands fa-facebook"></i>
                                <NavLink to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    {' '}
                                    www.facebook.com
                                </NavLink>
                                <br />
                                <br />
                                <i className="fa-brands fa-twitter"></i>
                                <NavLink to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    {' '}
                                    www.twitter.com
                                </NavLink>
                                <br />
                                <br />
                                <i className="fa-brands fa-instagram"></i>
                                <NavLink to="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                    {' '}
                                    www.instagram.com
                                </NavLink>
                                <br />
                                <br />
                                <i className="fa-brands fa-youtube"></i>
                                <NavLink to="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                    {' '}
                                    www.youtube.com
                                </NavLink>
                                <br />
                                <br />
                            </center>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Contact
