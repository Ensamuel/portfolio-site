import React from 'react'
import NavComp from './Comp1/NavComp'
import Hello from './Comp2/Hello'
import WhatIDo from './Comp3/WhatIDo'
import Experience from './Comp4/Experience'
import Projects from './Comp5/Projects'
import Contact from './Comp6/Contact'
import Footer from './Comp7/Footer'

import './App.css'
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <div id='appBody'>
    
    <NavComp/>
    <Container>
    <Hello /><br/>
    <WhatIDo/><br/>
  
    <Projects/><br/>
   
    </Container>
    <Footer/>
    
    </div>
  )
}

export default App
