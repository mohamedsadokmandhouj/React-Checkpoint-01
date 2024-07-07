
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import product from './product';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const firstName = "med sadok";

const App = () => {
  return (
    <Container className="my-1">
      <Row className="justify-content-center">
        <Col md={6}>
        <div className="greeting mt-4 text-center">
            <p className="greeting-text">Hello, {firstName ? firstName : 'there'}!</p>
            
          </div>
    <Card className="product-card shadow-lg">
            <Card.Img variant="top" src={product.image} className="product-image" />
       <Card.Body className="text-center">
           <Card.Title className="product-title">{product.name}</Card.Title>
  <Card.Text className="product-description">
                {product.description}
         </Card.Text>
        <Button variant="primary" className="product-price">{product.price}</Button>
       </Card.Body>
          </Card>
         
        </Col>
      </Row>
    </Container>
  );
};

export default App;