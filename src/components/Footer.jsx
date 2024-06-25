import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen bg-zinc-900 p-20 flex gap-8'>
        <div className='w-1/2 h-full flex flex-col justify-between'>

            <div className="headings">
                <h1 className='text-[4vw] font-mono font-semibold leading-none uppercase'>Kalki-</h1>
                <h1 className='text-[5vw] font-mono font-semibold leading-none uppercase'>Bookins open</h1>
            </div>
            <button className= "w-[8vw]  border-2 px-4 py-2 text-white border-white rounded-full">
            &copy;KALKI
          </button>

        </div>

        <div className='w-1/2 '>
        <h1 className='text-[4.5vw] font-sans font-bold leading-none uppercase'>Book Your Show</h1>

        <div className='mt-20'>
            {["Facebook","Instagram","Twitter"].map((item,index)=>{
              return  <a href="#" className='block text-xl font-mono font-light underline mt-2'>{item}</a>
            }
            )}
        </div>
        </div>
      
    </div>
  )
}

export default Footer
