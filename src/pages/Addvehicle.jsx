import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Form, Input, Button, Select, Row, Col, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import { baseURL } from '../../config';

const { Option } = Select;

const Addvehicle = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('role')


    const onFinish = (values) => {
        const formData = new FormData();

        if (values.vehicleImage && values.vehicleImage.fileList?.[0]?.originFileObj) {
            formData.append("vehicleImage", values.vehicleImage.fileList[0].originFileObj);
        } else {
            toast.error("Please upload a vehicle image.");
            return;
        }

        formData.append("vehicleName", values.vehicleName);
        // formData.append("rentermobile", values.rentermobile);
        formData.append("email", values.email);
        formData.append("vehicleType", values.vehicleType);
        formData.append("brandName", values.brandName);
        formData.append("model", values.model);
        formData.append("fuelType", values.fuelType);
        formData.append("rentPerDay", values.rentPerDay);
        formData.append("details", values.details);

        axios.post(`${baseURL}/vehicle/add`, formData)
            .then((response) => {
                if (response.status === 200) {
                    toast.success(response.data.message);
                    navigate("/");
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
            {role == 'hirer'  ? "" : <Navbar /> }
            <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}className=' !mx-30'>
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
                    <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "30px" }}>Add Vehicle</h1>

                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Vehicle Name"
                                name="vehicleName"
                                rules={[{ required: true, message: "Please enter Vehicle name" }]}
                            >
                                <Input placeholder="Enter your Vehicle name" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Vehicle Image"
                                name="vehicleImage"
                                valuePropName="file"
                                getValueFromEvent={(e) => e?.fileList?.[0] ? e : null}
                                rules={[{ required: true, message: "Please upload Vehicle Image" }]}
                            >
                                <Upload beforeUpload={() => false} maxCount={1}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Vehicle Type"
                                name="vehicleType"
                                rules={[{ required: true, message: "Please select vehicle type!" }]}
                            >
                                <Select placeholder="Choose Vehicle Type">
                                    <Option value="Bike">Bike</Option>
                                    <Option value="Car">Car</Option>
                                    <Option value="SUV">SUV</Option>
                                    <Option value="Modified Vehicle">Modified Vehicle</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Brand Name"
                                name="brandName"
                                rules={[{ required: true, message: "Please enter your Brand name" }]}
                            >
                                <Input placeholder="Enter your Brand name" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Model"
                                name="model"
                                rules={[{ required: true, message: "Please enter your Model" }]}
                            >
                                <Input placeholder="Enter your Model" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Fuel Type"
                                name="fuelType"
                                rules={[{ required: true, message: "Please select Fuel type!" }]}
                            >
                                <Select placeholder="Choose Fuel Type">
                                    <Option value="Petrol">Petrol</Option>
                                    <Option value="Diesel">Diesel</Option>
                                    <Option value="Electric">Electric</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Rent per day"
                                name="rentPerDay"
                                rules={[{ required: true, message: "Please enter rent per day" }]}
                            >
                                <Input type="number" placeholder="Enter rent per day" />
                            </Form.Item>
                        </Col>

                        {/* <Col xs={24} sm={12}>
                            <Form.Item
                                label="Renter Phone No"
                                name="rentermobile"
                                rules={[{ required: true, message: "Please enter your phone number" }]}
                            >
                                <Input placeholder="Enter your phone number" maxLength={10} />
                            </Form.Item>
                        </Col> */}
                    {/* </Row>

                    <Row gutter={16}> */}
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: "Please enter your email" },
                                    { type: "email", message: "Please enter a valid email" }
                                ]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label="Further details about Vehicle"
                        name="details"
                        rules={[{ required: true, message: "Please enter further details" }]}
                    >
                        <Input.TextArea placeholder="Enter further details" rows={4} />
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center" }}>
                        <Button type="primary" htmlType="submit">
                            Add Vehicle
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Addvehicle;
