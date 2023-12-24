import React from 'react'
import { Nav } from 'react-bootstrap'
const Contact = () => {
  return (
    <div className='text-center'>
      <h2>Reach Out to Me</h2>
      <Nav.Link href="#link2"><h6>
        <img src="linkedin.png" alt="tiktok" className='logo' />
        <img src="twitter.png" alt="instagram" className='logo' />
        <img src="youtube.png" alt="gmail" className='logo' />
      </h6>
      </Nav.Link>
    </div>
  )
}

export default Contact