import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div className='body'>
      <div className="container  ">
        <div className="row">
          <div className="col-md-12 lcm">
            <h1>Welcome to my portfolio</h1>
          </div>
          <p>This is Venkatagopikrishna a <u>Software Engineer</u></p>
        </div>
        <div className="row">
          <div className="col-md-12">
          <button className='know-btn btn btn-outline-primary'>Know about me</button>
          <button className='contact-btn btn btn-outline-primary'>Contact me</button>
          </div>
        </div>

      </div>
     
    </div>
  )
}

export default Home