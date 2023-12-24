import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hello.css'
const Hello = () => {
  return (


    <div className="justify-content-center justify-content-center align-items-center text-center">
      <div>
        <img src="vectorImage.jpg" alt="demo image" id='vector-image' />
      </div>
      <h1>Hello, I am Ebube Nworie</h1>
      <p>A Software Developer, Technical Writer,
        <br />Digital Marketer and Content Creator</p>


      <div className="">

        <a href='github.com/ensamuel'>
          <img src="github.png" alt="github" className='logo' />
        </a>

        <a href='linkedin.com/in/ebubenworie'>
          <img src="linkedin.png" alt="linkedin" className='logo' />
        </a>

        <a href='x.com/@ebubenworie_'>
          <img src="twitter.png" alt="twitter" className='logo' />
        </a>


      </div>
      <div className='hello-buttons'>
        <a href='ebubes.nworie@gmail.com'>
          <button className='hello-button'>CONTACT ME</button>
        </a>


      </div>

    </div>






  );
};

export default Hello;
