import React, { useState } from 'react'
import './WhatIDo.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Container, Row, Col, Button } from 'react-bootstrap';
const WhatIDo = () => {
  const [isSoftware, setIsSoftware] = useState(false)
  function toggleSoftware() {
    setIsSoftware(!isSoftware)
  }

  const [isTechWriting, setIsTechWriting] = useState(false)
  function toggleTechWriting() {
    setIsTechWriting(!isTechWriting)
  }

  const [isDigiCreation, setIsDigiCreation] = useState(false)
  function toggleDigiCreation() {
    setIsDigiCreation(!isDigiCreation)
  }


  return (
    <Row className=" justify-content-center align-items-center text-center what-ido-row">
      <h1 className='what-i-do'>What I Do</h1><hr />
      <Col md={6} className=" justify-content-center align-items-center">

        <button className='what-button' onClick={toggleSoftware}>Software Development +</button ><br />
        {isSoftware && <div>
          <p>I am a skilled intermediate frontend engineer
            and a beginner backend engineer, I use my problem solving
            ability to solve complex projects and produce
            results that are appreciated by the end users
          </p>
          <Nav.Link href="#link2"><h6>View my code base:
            <a href="http://github.com/ensamuel"><img src="github.png" alt="github" className='logo' /></a></h6>
          </Nav.Link>
        </div>}

        <button className='what-button' onClick={toggleTechWriting}>Technical Writing +</button><br />
        {isTechWriting && <div>
          <p>I am an avid writer, who breaks down coding concepts
            for beginners to understand I'm gradually transitioning
            into API documentations.
          </p>
          <Nav.Link href="#link2"><h6>View my writing portfolio:
            <a href="http://dev.to/ensamuel"><img src="dev.png" alt="dev to" className='logo' /></a>
            </h6>
          </Nav.Link>
        </div>}

        <button className='what-button' onClick={toggleDigiCreation}>Content Creation +</button><br />
        {isDigiCreation && <div>
          <p>I manage and grow different social media pages; I create, edit
            and promote amazing contents, ranging from graphics, to videos
            using keyword analytics and other socail media/ search engine
            optimization tool.
          </p>
          <h6>View some of the accounts I manage:
            <a href="http://tiktok.com/@bammyhouse"> <img src="tiktok.png" alt="tiktok" className='logo' /></a>
            <a href="http://instagram.com/@bheatlehq"><img src="instagram.png" alt="instagram" className='logo' /> </a>
            <a href="http://youtube.com/@bammyhouse"><img src="youtube.png" alt="youtube" className='logo' /> </a>

          </h6>

        </div>}

      </Col>

      <Col md={6} className="d-flex justify-content-center align-items-center">
        <div>
          <img src="vectorImage.jpg" alt="demo image" id='vector-image' />
        </div>
      </Col>



    </Row >
  )
}

export default WhatIDo