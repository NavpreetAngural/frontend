import React, { useState, useEffect } from 'react';
import { Card, Typography, Space } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import { baseURL } from '../../config';

const { Title, Text } = Typography;

const Hirerprofile = () => {
  const [user, setUser] = useState(null);
  const email = localStorage.getItem('email');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${baseURL}/auth/hirerprofile/${email}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [email]);

  if (!user) return <div className="mt-10 text-center">User not found</div>;

  return (
    <div className="flex justify-center items-center w-full !px-4">
      <Card className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 !my-10 rounded-2xl shadow-lg border border-gray-200">
        <div className="flex flex-col items-center text-center space-y-4 p-6">
          <Title level={4} className="!mb-0">{user.fullname}</Title>
          <Text type="secondary" className="text-lg">{user.role}</Text>

          <Space direction="vertical" size={6} className="text-sm text-gray-700 mt-5">
            <span><MailOutlined className="mr-2" /> {user.email}</span>
            <span><PhoneOutlined className="mr-2" /> {user.phone}</span>
            <span><EnvironmentOutlined className="mr-2" /> {user.address}</span>
          </Space>

          <Space size="middle" className="mt-6">
            <a href={user.github} target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="text-2xl text-gray-700 hover:text-black transition" />
            </a>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="text-2xl text-gray-700 hover:text-blue-600 transition" />
            </a>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default Hirerprofile;
