import React from 'react'
import './Experience.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
const Experience = () => {
  return (      

        <div className='justify-content-center'>
          <h2>Experiences</h2>

          <Row className="justify-content-center what-row">
            <Col md={4}>
              <div>
                <h3>Crediometer</h3>
                <h4>Frontend Developer Intern</h4>
                <h5>August 2022 - October 2022</h5>

              </div>
            </Col>
            <Col md={4}>
              <div>
                <h3>Bammy House</h3>
                <h4>Content Creator and Social Media Manager</h4>
                <h5>Dec 2022 - present</h5>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h3>Bheatle Hq</h3>
                <h4>Product and Digital Manager</h4>
                <h5>Nov 2023</h5>
              </div>
            </Col>
          </Row>

        </div>
      
    
  )
}

export default Experience