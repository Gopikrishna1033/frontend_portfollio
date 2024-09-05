import React from 'react'
import "./Home.css"
import Gopi from "../assets/Gopi.jpg"
function Home() {
  return (
    <div className='body'>
      <div className="container  ">
        <div className="row">
          <div className="col-md-12 lcm">
            <h1>Welcome to my portfolio</h1>
          </div>
          <img src={Gopi} alt="description"  loading='lazy' className='gopi' width={300}/>
          <p>This is Venkatagopikrishna a <u>Software Engineer</u></p>

          
          <button className='know-btn btn btn-outline-primary '>Know about me</button>
          <button className='contact-btn btn btn-outline-primary'>Contact me</button>
        </div>
        
        {/* <div className="row">
          <div className="col-md-12">
          <button className='know-btn btn btn-outline-primary '>Know about me</button>
          <button className='contact-btn btn btn-outline-primary'>Contact me</button>
          </div>
        </div> */}

      </div>
      
    </div>
  )
}

export default Home