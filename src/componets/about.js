import React from 'react'
// import {BsFillEnvelopeFill} from 'react-icons/bs'
// import {FaApple} from 'react-icons/fa'

function About() {
  return (
    <div className='divinfo'>
         <h1 className='name'>Sir Lewis Hamilton</h1>
         <br></br>
         <h3 className='design'>Mercedes-benz AMG Formula 1 Driver</h3>
         <button className='email-btn'></button>
         {/* <button><BsFillEnvelopeFill size={50} /></button>
         <button style={{color: "#8b4513", backgroundColor:"rgb(54, 53, 53", border:"none"}}><FaApple size={50} /></button> */}
         <br></br>
         <br></br>
         <h2 className='aboutxt'>About</h2>
         <h3 className='about'>Lewis Hamilton is the only 8 time world champion in formula 1 history.He started his career from McLaren racing and then joined MercedesAMG formula 1 team.</h3>
         <h2 className='interest'>Interests</h2>
         <h3 className='interestxt'>Racing, Swimmer , Dog enthusiast, Fashion icon, Activist, Skiing, having the fireplace around, Wake up in the morning, have some pancakes and then go to the top of the mountain.</h3>
    </div>
  )
}

export default About