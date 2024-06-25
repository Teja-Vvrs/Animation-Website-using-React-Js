import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-screen px-20 py-8 flex justify-between fixed z-[999] '>
        <div className="logo">
            <h1 className=' text-4xl font-bold font-mono'>Kalki</h1>
        </div>
        <div className="links flex gap-10">
            {["Services","Our Work","About Us","Insights","Contact Us"].map((item,index)=>(
                <a key={index} className={`text-lg font-light capitalize hover:underline ${index===4 &&  "ml-32"}`}>{item}</a>
            ))}
        </div>
 



    </div>
  )
}

export default Navbar
