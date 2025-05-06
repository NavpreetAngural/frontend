import React from 'react'
import {
    Button,
    Form,
    Input,
    Radio,
    Select
} from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useGoogleLogin } from '@react-oauth/google';
import "../index.css"
import { baseURL } from '../../config';

const Register = () => {
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log("Received values of form: ", values);

        axios.post("http://localhost:3000/api/auth/register", values)
            .then((response) => {
                if (response.status === 200) {
                    toast.success(response.data.message)
                }
                else {
                    toast.error(response.data.message);
                }
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Registration failed. Try again.");
                }
            });

    };
    const responseGoogle = async (authResult) => {
        console.log("Google Auth Response:", authResult);
        try {
            if (authResult.code) {
                const res = await axios.post(`${baseURL}/auth/google?code=${authResult.code}`);
                console.log("Response from backend:", res);
                const { email, name, image } = res.data.user;
                const token = res.data.token;
                const obj = { email, name, token, image };
                localStorage.setItem("user-info", JSON.stringify(obj));
                navigate("/AdminDashboard");
            } else {
                throw new Error("Google authentication failed");
            }
        } catch (e) {
            console.log("Error while Google Login...", e);
        }
    };


    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    });

    return (

        <center>
            <Form
                name="register"
                onFinish={onFinish}
                style={{
                    maxWidth: 800,
                    paddingTop: "10px"
                }}
                initialValues={{
                    role: 'hirer', // default value
                }}
            >

                <Form.Item
                    name="fullname"
                    label="Full Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Fullname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Role"
                    name="role"
                    rules={[{ message: "Please select Role!", required: true, }]}
                >
                    <Select placeholder="Choose user Role" >
                        <Option value="renter">Renter</Option>
                        <Option value="hirer">Hirer</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input maxLength={10} minLength={10} />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your gender!',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value="Male">Male</Radio>
                        <Radio value="Female">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                >
                    <Checkbox>
                        I have read the <NavLink to=''>agreement</NavLink>
                    </Checkbox>
                </Form.Item> */}
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    {/* <span style={{ marginLeft: "10px" }}>If registered , <NavLink to="/login"> Login </NavLink></span> */}
                </Form.Item>
                <Form.Item>
                    <button
                        onClick={googleLogin}
                        className="flex items-center justify-center gap-2 w-full text-[#000] bg-white border border-gray-300 rounded-md py-2 font-medium hover:bg-gray-100 transition mb-4"
                    >
                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="G" className="w-5 h-5" />
                        Continue with Google
                    </button>
                </Form.Item>
            </Form>
        </center>

    )
}

export default Register
