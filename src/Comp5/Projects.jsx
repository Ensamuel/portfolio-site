import React from 'react'
import './Projects.css'
import { Row, Col } from 'react-bootstrap'
const Projects = () => {
  return (
    <div className='projects-div text-center'>
      <h1>Featured Projects</h1>


      <Row className="justify-content-center">
        <Col md={4} className='text-center projects-col'>
          <div>
            <img src="taxAndBill.jpg" alt="tax calculator" />
            <h2>Tax and Bill Calculator</h2>
            <p>Manage your income better using this app.
              Calculate your bills and taxes
            </p>
            <a href="http://github.com/ensamuel"><button>see code</button></a>
            <a href="http://tinyurl.com/taxAndBillCalc"><button>see live app</button></a> 
          </div>
        </Col>
        <Col md={4} className='text-center projects-col'>
          <div>
            <img src="onlineResources.jpg" alt="online resources" />
            <h2>Online Resources</h2>
            <p>Get the online resources required to make
              you a professional in your chosen tech field using
              this app
            </p>
           <a href="http://github.com/ensamuel"><button>see code</button></a> 
           <a href="http://tinyurl.com/onlineResources"><button>see live app</button></a> 
          </div>
        </Col>
        <Col md={4}className='text-center projects-col'>
          <div>
            <img src="basicBlog.jpg" alt="basic blog" />
            <h2>Basic Microblog</h2>
            <p>Express your thoughts with this app before
              posting it on social media to reduce
              the amount of mistakes made when posting
            </p>
            <a href="http://github.com/ensamuel"><button>see code</button></a> 
            <a href="http://tinyurl.com/buziBasicBlog"><button>see live app</button></a> 
          </div>
        </Col>
      </Row><br/>

      <Row>
        <Col md={4} className='text-center projects-col'>
          <div>
        
            <img src="multiUnitConverter.jpg" alt="multi converter" />
            <h2>Multiunit Converter app</h2>
            <p>Do your mathematical conversions by using this app. convert
              from one unit to another with ease
            </p>
            <a href="http://github.com/ensamuel"><button>see code</button></a> 
            <a href="http://tinyurl.com/MultiUnitConverter"><button>see live app</button></a> 
          </div>
        </Col>

        <Col md={4} className='text-center projects-col'>
          <div>
            
            <img src="weatherApp.jpg" alt="weather app" />
            <h2>Weather Report App</h2>
            <p>Check the latest weather report in your
              city using this app
            </p>
            <a href="http://github.com/ensamuel"><button>see code</button></a> 
            <a href="http://tinyurl.com/WeatherApp"><button>see live app</button></a> 
          </div>
        </Col>
        
      </Row>
    </div>
  )
}

export default Projects