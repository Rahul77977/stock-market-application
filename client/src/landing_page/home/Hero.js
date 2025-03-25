import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 m-5'>
    <div className="row text-center">
      <img src="media/images/homeHero.png" alt="Hero-Image"  className='mb-5'/>
      <h1 className='mt-5'>invest in everything</h1>
      <p>online platform to invest stocks,derivatives,mutual funds</p>
      <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:" 0 auto"}}>Signup now</button>
    </div>
  </div>
  )
}

export default Hero