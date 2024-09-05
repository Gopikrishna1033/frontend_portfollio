import React, { useRef, useState } from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'

function Contact() {

  let [succeeded,setsuccess] = useState(false)
  const formref = useRef(null)
  let [user,setuser] = useState({
    mail:"",
    text:""
  })

  let updateHandler=(event)=>{
      setuser({...user,[event.target.name]:event.target.value})
  }

  let submitHandler=(event)=>{
    event.preventDefault();
    console.log(user)
    setsuccess(true)

    setTimeout(()=>{
      if(formref.current){
        formref.current.reset();
      }
      setsuccess(false)
    },1000)
  }
  

  return (
    <div className='contact-form'>

      <h1>Get in touch!</h1>
      <p className='cont-para'> Interested to collaborate? Drop a email</p>
      <div className="cont-form">
        <form onSubmit={submitHandler} ref={formref}>
          <div className="form-group">
            {/* <pre>{JSON.stringify(user)}</pre> */}
          <input type="email" className='form-control col-sm-5' placeholder='email@gmail.com' required name='mail' onChange={updateHandler}/>
          </div>
          <div className="form-group">
            
            <textarea name="text" id="" className='form-control col-sm-5' rows={7} placeholder='Enter you Message' required onChange={updateHandler}></textarea>
          </div>
          <div className="form-group">
            <button className='btn btn-primary form-control col-sm-5' style={{marginLeft:1}}>Submit</button>
          </div>
        </form>
      </div>
        <div className='Home'>
          <Link to={'/'}>
           <img src="https://tse3.mm.bing.net/th?id=OIP.Ufhw6gE8oI7VfnpUCRDK3AHaHa&pid=Api&P=0&h=180" alt="" />
          </Link>
          
        </div>
    </div>
  )
}

export default Contact