import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div 
  className="newsletter-bx wow slideInUp" 
  style={{
    background: 'rgba(255, 255, 255, 0.8)', // White background with transparency
    borderRadius: '55px',
    color: '#FFFFFF', // White text
    padding: '85px 125px',
    marginBottom: '80px',
    marginTop: '-122px',
    textAlign: 'center', // Center the content
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' // Subtle shadow for depth
  }}
>
  <h1 
    style={{
      fontSize: '48px', // Increased font size
      fontWeight: 'bold', // Bold text
      margin: '0', // Remove default margins
      textTransform: 'uppercase' // Uppercase text
    }}
  >
    Abrham Assefa Full Stack Developer
  </h1>
</div>

      </Col>
  )
}
