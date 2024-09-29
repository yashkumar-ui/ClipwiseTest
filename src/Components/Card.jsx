import React from 'react'
import pic from "../assets/Без имени-1 1.svg";

const Card = ({cardContent , currentCard , setCurrentCard }) => {
  return (
    <div  onClick={() => setCurrentCard(cardContent.index)} className= {` w-full bg-[#ffffff]  ${currentCard === cardContent?.index ? "shadow-2xl" : "border-gray-200 border-2"}
     flex flex-col items-center cursor-pointer rounded-3xl h-[370px] pt-4`}>
         <div>
            <img
                src={pic} alt='cardPic'
            />
         </div>
         <p className='uppercase text-gray-500 text-sm sm:text-[0.9rem] font-[400]'>{cardContent?.name}</p>
         <p className='text-[#307189] font-bold'>{cardContent?.price}{` `}$</p>

         <button
          className={`${ currentCard === cardContent?.index ? "bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] text-white" : "bg-white text-[#75CCEB] border-2 border-[#75CCEB]" } mt-6  px-10 py-3 font-semibold rounded-xl hover:scale-95 transition-all duration-200 uppercase `}>
            <p className='text-xs'>
               Buy Now
            </p>
         </button>
    </div>
  )
}

export default Card