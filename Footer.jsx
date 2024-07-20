import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl"> </div>

            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' 
                 src="icons/heart.png" alt="" /> by Uttkarsh 
            </div>
            <div className='flex text-green-300'> @Karsh2023 </div>
        </div>
    )
}

export default Footer