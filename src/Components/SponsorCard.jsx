import React from 'react'

export const SponsorCard = ({sponser}) => {
    return (
        <div className='flex flex-col justify-start items-center px-6 py-4 border drop-shadow-2xl shadow-inner shadow-[#FFFFFF] rounded-xl'>
            <div className='uppercase text-base lg:text-lg font-extrabold mb-5'>
               {sponser.name}
            </div>
            <div className='text-xl' >
                <img src={sponser.image} className='w-[270px] h-[210px]  rounded-md'/>
            </div>
        </div>
    )
}
