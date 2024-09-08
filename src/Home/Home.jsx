import React from 'react'
import "./Home.css"
import Gopi from "../assets/Gopi.jpg"
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className='body'>
      <div className="container  ">
        <div className="row">
          <div className="col-md-12 lcm">
            <h1>Welcome to my portfolio</h1>
          </div>
          <img src={Gopi} alt="description"  loading='lazy' className='gopi' />
          <p>This is Venkatagopikrishna a <u>Software Engineer</u></p>
        </div>
        
        <div className="btn-container">
          <Link to={"/about"}>
          <button className='know-btn btn btn-outline-primary '>Know about me</button>
          </Link>
  
          <Link to={"/contact"}>
          <button className='contact-btn btn btn-outline-primary'>Contact me</button>
          </Link>
        </div>
       

      </div>
      {console.log(window.innerWidth+ 'X' + window.innerHeight)}
    </div>
  )
}

export default Home