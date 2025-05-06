import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { toast } from 'react-toastify';
import { baseURL } from '../../config';
import axiosinstance from '../../axiosinstance';
import "../index.css";
import { useNavigate } from 'react-router';

const Login = ({ onSuccess }) => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        axiosinstance.post(`${baseURL}/auth/login`, values)
            .then((response) => {
                if (response.status === 200) {
                    // toast.success(response.data.message);
                    localStorage.setItem("accessToken", response.data.jwtToken);
                    localStorage.setItem("role", response.data.role);
                    localStorage.setItem("fullname", response.data.fullname);
                    localStorage.setItem("email", response.data.email);
                    if (onSuccess) onSuccess();
                    if (response.data.role === 'hirer') {
                        navigate("/hirerdashboard")
                        toast.success("Hirer Login Successfully")
                    }
                    else if (response.data.role === 'renter') {
                        navigate("/renterdashboard")
                        toast.success("Renter Login Successfully")
                    }
                    else{
                        navigate("/")
                        toast.success("Admin Login Successfully")
                    }
                }
                // else {
                //     toast.error(response.data.message);
                // }
            })
            .catch((error) => {
                toast.error(error.response?.data?.message);
            });
    };

    return (
        <center>
            <Form
                name="login"
                onFinish={onFinish}
                style={{ maxWidth: 400, paddingTop: "10px" }}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit" style={{ marginBottom: 10 }}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </center>
    );
};

export default Login;
