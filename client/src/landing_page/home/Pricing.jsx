import React from 'react'

const Pricing = () => {
  return (
    <div className='container'>
<div className="row">
    <div className="col-4">
        <h1 className='mb-3'>Unbeatable Pricing</h1>
    
        <p>we poineer  the concept discount broking snd price transperncy in india .flat fees and no hidden charges</p>
   <a href="" style={{textDecoration:"none"}}>See Pricing 
   <i className="fa-solid fa-arrow-right" />

   </a>
    </div>
    <div className="col-2"></div>
    <div className="col-6">
      <div className="row text-center">
      <div className="col p-2 border">
            <h1>₹0</h1>
            <p>Free Equity  delivery  and <br /> direct mutual funds</p>
        </div>
        <div className="col p-2 border">
            <h1>₹20</h1>
        <p>Intraday and F&O trades</p>
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default Pricing