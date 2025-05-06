import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Form, Input, Button, Select, DatePicker, Row, Col } from "antd";
import { useNavigate } from 'react-router';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import { baseURL } from '../../config';

const { Option } = Select;

const Addbooking = () => {
    const navigate = useNavigate();
    const [isModifiedVehicle, setIsModifiedVehicle] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const handleVehicleChange = (value) => {
        setIsModifiedVehicle(value === "Modified Vehicle");
    };

    const role = localStorage.getItem('role')
    const onFinish = (values) => {
        axios.post(`${baseURL}/booking/add`, values)
            .then((response) => {
                if (response.status === 200) {
                    toast.success(response.data.message);
                    navigate("/renterdashboard/mybooking");
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
            });
    };

    return (
        <div>
            {role == 'renter'  ? "" : <Navbar /> }
            <div style={{ display: "flex", justifyContent: "center", padding: "20px" }} className='bg-[rgb(180,215,228)]'>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    style={{
                        width: "100%",
                        maxWidth: "800px",
                        backgroundColor: "rgb(245, 245, 245)",
                        padding: "30px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                >
                    <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold"}}>Add Booking</h1>
                    <h4 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "30px" }}>View all Vehicles from <b></b> Page</h4>
                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: "Please enter your full name" }]}
                            >
                                <Input placeholder="Enter your full name" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "Please enter your email" }]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Phone No"
                                name="mobile"
                                rules={[{ required: true, message: "Please enter your phone number" }]}
                            >
                                <Input placeholder="Enter your phone number" maxLength={10} minLength={10} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Vehicle Type"
                                name="vehicleType"
                                rules={[{ required: true, message: "Please select vehicle type!" }]}
                            >
                                <Select placeholder="Choose Vehicle Type" onChange={handleVehicleChange}>
                                    <Option value="Bike">Bike</Option>
                                    <Option value="Car">Car</Option>
                                    <Option value="SUV">SUV</Option>
                                    <Option value="Modified Vehicle">Modified Vehicle</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    {isModifiedVehicle && (
                        <Form.Item
                            label="Modification Details"
                            name="modificationDetails"
                            rules={[{ required: true, message: "Please enter modification details" }]}
                        >
                            <Input placeholder="Enter modification details" />
                        </Form.Item>
                    )}

                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="License No."
                                name="licenseNo"
                                rules={[{ required: true, message: "Please enter the License No." }]}
                            >
                                <Input placeholder="Enter the License No." />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Select Pickup Date"
                                name="pickupDate"
                                rules={[{ required: true, message: "Please select a Pickup date!" }]}
                            >
                                <DatePicker style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label="Select Drop off Date"
                        name="dropDate"
                        rules={[{ required: true, message: "Please select a Drop off date!" }]}
                    >
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center" }}>
                        <Button type="primary" htmlType="submit">
                            Add Booking
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Footer/>
        </div>
    );
};

export default Addbooking;
