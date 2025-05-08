import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import {
    Typography, Table, Button, Form, Input, Select, Modal, Row, Col, Upload
} from 'antd';
import { baseURL } from '../../config';
import { toast } from 'react-toastify';
import axiosinstance from '../../axiosinstance';


const { Title } = Typography;
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

const Viewvehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingVehicleId, seteditingVehicleId] = useState(null)
    const [form] = Form.useForm()

    useEffect(() => {
        viewVehicles();
    }, []);

    const viewVehicles = async () => {
        try {
            const response = await axiosinstance.get(`${baseURL}/vehicle/view`);
            setVehicles(response.data);
        } catch (error) {
            console.log("Error while fetching vehicles:", error);
        }
    }

    const onFinish = async (values) => {
        try {
            const formData = new FormData();

            if (values.vehicleImage?.fileList?.[0]?.originFileObj) {
                formData.append("vehicleImage", values.vehicleImage.fileList[0].originFileObj);
            }

            for (let key in values) {
                if (key !== "vehicleImage") {
                    formData.append(key, values[key]);
                }
            }

            if (editingVehicleId) {
                await axiosinstance.put(`${baseURL}/vehicle/update/${editingVehicleId}`, formData);
                toast.success("Vehicle updated successfully");
            } else {
                const response = await axiosinstance.post(`${baseURL}/vehicle/add`, formData);
                toast.success(response.data.message);
            }

            form.resetFields();
            setIsModalOpen(false);
            seteditingVehicleId(null);
            viewVehicles();
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong.");
        }
    };

    const handleDelete = async (id) => {
        try {
            console.log("Deleting vehicle with ID:", id); // Debugging line
            await axiosinstance.delete(`${baseURL}/vehicle/delete/${id}`);
            setVehicles(prev => prev.filter(item => item._id !== id));
            toast.success("Vehicle deleted successfully");
        } catch (error) {
            toast.error("Vehicle deletion failed");
            console.error("Error while deleting vehicle:", error);
        }
    }

    const handleEdit = (vehicle) => {
        setIsModalOpen(true)
        seteditingVehicleId(vehicle._id)
        form.setFieldsValue({
            vehicleName: vehicle.vehicleName,
            email: vehicle.email,
            vehicleType: vehicle.vehicleType,
            brandName: vehicle.brandName,
            model: vehicle.model,
            fuelType: vehicle.fuelType,
            rentPerDay: vehicle.rentPerDay,
            details: vehicle.details
        });
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        seteditingVehicleId(null)
        form.resetFields();
    }

    const showModal = () => {
        setIsModalOpen(true)
        seteditingVehicleId(null)
        form.resetFields();
    }

    const columns = [
        {
            title: 'Vehicle Name',
            dataIndex: 'vehicleName',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'userType',
        },
        {
            title: 'Vehicle Image',
            dataIndex: 'vehicleImage',
            key: 'vehicleImage',
            render: (vehicleImage) => (
                <img
                    src={`http://localhost:3000/uploads/${vehicleImage}`}
                    alt="Vehicle"
                    style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />
            ),
        },
        {
            title: 'Vehicle Type',
            dataIndex: 'vehicleType',
            key: 'vehicleType',
        },
        {
            title: 'Brand Name',
            dataIndex: 'brandName',
            key: 'brandName',
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'Fuel Type',
            dataIndex: 'fuelType',
            key: 'fuelType',
        },
        {
            title: 'Price',
            dataIndex: 'rentPerDay',
            key: 'rentPerDay',
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
        },
        {
            title: 'Delete',
            key: 'delete',
            render: (_, record) => (
                <MdDelete
                    className="text-red-600 cursor-pointer"
                    size={22}
                    onClick={() => handleDelete(record._id)} // Fixed delete click
                />
            ),
        },
        {
            title: 'Edit',
            key: 'edit',
            render: (_, record) => (
                <MdEdit
                    className="text-blue-600 cursor-pointer"
                    size={22}
                    onClick={() => handleEdit(record)}
                />
            ),
        }
    ];

    return (
        <>
      <div className='flex items-center justify-between mb-4'>
      <Title level={4}>Users</Title>
                <Button type='primary' onClick={showModal}>Add Vehicle</Button>
            </div>
            <center>
                <Modal
                    title={editingVehicleId ? "Edit Vehicle" : "Add Vehicle"}
                    width={500}
                    footer={null}
                    open={isModalOpen}
                    onCancel={handleCancel}
                >
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
                                {editingVehicleId ? "Update" : "Add Vehicle"}
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </center>
            <Table
                columns={columns}
                dataSource={vehicles}
                rowKey="_id"
            />
        </>
    );
}

export default Viewvehicles;
