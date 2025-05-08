import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, Row, Col, Typography } from 'antd';
import bike1 from "../assets/images/bike1.jpg";
import car1 from "../assets/images/car1.jpg";
import suv1 from "../assets/images/suv1.avif";
import modified from "../assets/images/modified.jpg";
import { useNavigate } from 'react-router';
import Renterfooter from '../components/Renterfooter';

const { Title } = Typography;
const { Meta } = Card;

const Vehiclecategory = () => {
  const navigate = useNavigate()
  const vehicleCategories = [
    { type: "Bike", image: bike1 },
    { type: "Car", image: car1 },
    { type: "SUV", image: suv1 },
    { type: "Modified Vehicle", image: modified },
  ];
  const handleCardClick = (type) => {
    navigate(`/vehicle/${type}`);
  };

  const role = localStorage.getItem('role')

  return (
    <>
    {role == 'renter'  ? "" : <Navbar /> }
      
      <div style={{ padding: '20px' }} >
        <Title level={3} style={{ textAlign: 'center', marginBottom: '30px' }}>
          Choose Vehicle Category
        </Title>

        <Row gutter={[16, 16]} justify="center">
          {vehicleCategories.map((category, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={6}
              lg={6}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                hoverable
                style={{ width: 250 }}
                onClick={() => handleCardClick(category.type)}
                cover={
                  <img
                    alt={category.type}
                    src={category.image}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                }
              >
                <Meta title={category.type} style={{ textAlign: 'center' }} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {role == 'renter'  ? "" : <Renterfooter /> }
    </>
  );
};

export default Vehiclecategory;
