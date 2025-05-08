import React, { useState, useEffect } from 'react';
import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker
} from 'antd';
import axiosinstance from '../../axiosinstance';
import { baseURL } from '../../config';
import { MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
const { Title } = Typography;
const { Option } = Select;

const Viewbookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingUserId, setEditingUserId] = useState(null);
  const [isModifiedVehicle, setIsModifiedVehicle] = useState(false);

  const handleVehicleChange = (value) => {
    setIsModifiedVehicle(value === 'Modified Vehicle');
  };

  useEffect(() => {
    viewBookings();
  }, []);

  const viewBookings = async () => {
    try {
      const response = await axiosinstance.get(`${baseURL}/booking/view`);
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

      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={bookings}
          rowKey="_id"
          className="!my-10"
          scroll={{ x: "1000px" }} // Enables horizontal scroll on small screens
        />
      </div>
    </>
  );
};

export default Viewbookings;
