import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Card, Col, Row,
  Tag
} from 'antd';
import axiosinstance from '../../axiosinstance';
import { baseURL } from '../../config';
import { MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
const { Title } = Typography;
const { Option } = Select;

const Mybookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingUserId, setEditingUserId] = useState(null);
  const [isModifiedVehicle, setIsModifiedVehicle] = useState(false);
  const email = localStorage.getItem('email')

  const handleVehicleChange = (value) => {
    setIsModifiedVehicle(value === 'Modified Vehicle');
  };

  useEffect(() => {
    viewBookings();
  }, []);

  const viewBookings = async () => {
    try {
      const response = await axiosinstance.get(`${baseURL}/booking/mybooking/${email}`);
      setBookings(response.data);
    } catch (error) {
      console.log('Error while fetching bookings:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosinstance.delete(`${baseURL}/booking/delete/${id}`);
      setBookings((prev) => prev.filter((item) => item._id !== id));
      toast.success('Booking deleted successfully');
    } catch (error) {
      toast.error('Failed to delete booking');
    }
  };

  const handleEdit = (booking) => {
    setIsModalOpen(true);
    setEditingUserId(booking._id);
    setIsModifiedVehicle(booking.vehicleType === 'Modified Vehicle');
    form.setFieldsValue(booking);

    form.setFieldsValue({
      ...booking,
      pickupDate: booking.pickupDate ? dayjs(booking.pickupDate) : null,
      dropDate: booking.dropDate ? dayjs(booking.dropDate) : null
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
    setEditingUserId(null);
    setIsModifiedVehicle(false);
    form.resetFields();
  };

  const onFinish = async (values) => {
    try {
      if (editingUserId) {
        await axiosinstance.put(`${baseURL}/booking/update/${editingUserId}`, values);
        toast.success('Booking updated successfully');
      } else {
        const response = await axios.post(`${baseURL}/booking/add`, values);
        toast.success(response.data.message);
      }
      form.resetFields();
      setIsModalOpen(false);
      setEditingUserId(null);
      viewBookings();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong.');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingUserId(null);
    form.resetFields();
  };

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Vehicle Type',
      dataIndex: 'vehicleType',
      key: 'vehicleType'
    },
    {
      title: 'Modification Details',
      dataIndex: 'modificationDetails',
      key: 'modificationDetails',
      render: (text) => (text ? text : 'N/A')
    },
    {
      title: 'License No.',
      dataIndex: 'licenseNo',
      key: 'licenseNo'
    },
    {
      title: 'Pick Up Date',
      dataIndex: 'pickupDate',
      key: 'pickupDate'
    },
    {
      title: 'Drop Date',
      dataIndex: 'dropDate',
      key: 'dropDate'
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <MdDelete
          className="text-red-600 cursor-pointer"
          size={22}
          onClick={() => handleDelete(record._id)}
        />
      )
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
      )
    }
  ];

  return (
    <>
      <Row justify="center" align="middle" style={{ margin: "1rem 0" }} gutter={[16, 16]}>
              <Col xs={24} sm={16} style={{ textAlign: 'center' }}>
                <Title level={4} style={{ marginBottom: 0 }}>
                  My Bookings
                </Title>
              </Col>
              <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
                <Button type='primary' onClick={showModal}>
                  Add Booking
                </Button>
              </Col>
            </Row>

      <Modal
        title={editingUserId ? 'Edit Booking' : 'Add Booking'}
        width={500}
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          style={{
            padding: '30px',
            backgroundColor: 'rgb(245, 245, 245)'
          }}
        >
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Phone No"
            name="mobile"
            rules={[
              {
                required: true,
                message: 'Please enter your phone number'
              }
            ]}
          >
            <Input placeholder="Enter your phone number" maxLength={10} />
          </Form.Item>

          <Form.Item
            label="Vehicle Type"
            name="vehicleType"
            rules={[{ required: true, message: 'Please select vehicle type!' }]}
          >
            <Select
              placeholder="Choose Vehicle Type"
              onChange={handleVehicleChange}
            >
              <Option value="Bike">Bike</Option>
              <Option value="Car">Car</Option>
              <Option value="SUV">SUV</Option>
              <Option value="Modified Vehicle">Modified Vehicle</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Modification Details" name="modificationDetails">
            <Input
              placeholder="Enter modification details"
              disabled={!isModifiedVehicle}
            />
          </Form.Item>

          <Form.Item
            label="License No."
            name="licenseNo"
            rules={[
              { required: true, message: 'Please enter the License No.' }
            ]}
          >
            <Input placeholder="Enter the License No." />
          </Form.Item>

          <Form.Item
            label="Select Pickup Date"
            name="pickupDate"
            rules={[
              { required: true, message: 'Please select a Pickup date!' }
            ]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Select Drop off Date"
            name="dropDate"
            rules={[
              { required: true, message: 'Please select a Drop off date!' }
            ]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              {editingUserId ? 'Update Booking' : 'Add Booking'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Row gutter={[16, 16]} >
        {bookings.map((booking) => (
          <Col xs={24} sm={12} md={8} lg={8} key={booking._id}>
            <Card
              className='!mx-[30]'
              title={booking.vehicleType}
              bordered={false}
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              extra={
                <div className="flex gap-3 !mx-[30]">
                  <MdEdit
                    className="text-blue-600 cursor-pointer"
                    size={20}
                    onClick={() => handleEdit(booking)}
                  />
                  <MdDelete
                    className="text-red-600 cursor-pointer"
                    size={20}
                    onClick={() => handleDelete(booking._id)}
                  />
                </div>
              }
            >
              <p><strong>Full Name:</strong> {booking.fullname}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Phone:</strong> {booking.mobile}</p>
              <p><strong>License No:</strong> {booking.licenseNo}</p>
              {booking.vehicleType === 'Modified Vehicle' && (
                <p><strong>Modifications:</strong> {booking.modificationDetails || 'N/A'}</p>
              )}
              <p>
                <strong>Pickup:</strong>{' '}
                <Tag color="green">{dayjs(booking.pickupDate).format('DD-MM-YYYY')}</Tag>
              </p>
              <p>
                <strong>Drop:</strong>{' '}
                <Tag color="volcano">{dayjs(booking.dropDate).format('DD-MM-YYYY')}</Tag>
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Mybookings;
