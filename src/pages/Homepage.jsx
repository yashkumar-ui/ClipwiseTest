import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import bg1 from "../assets/Vector 1.svg"
import pic1 from "../assets/Без имени-1 1.jpg"
import { useNavigate } from 'react-router-dom'
import {FaArrowLeft ,FaCircle , FaArrowRight} from "react-icons/fa"
import {BsMouse} from "react-icons/bs"
import {GoTriangleDown} from "react-icons/go"
import Card from '../Components/Card'
import Vector2 from "../assets/Vector 2.svg";


const cardData = [
    {
        index:0,
        name : "Crystal Agaet Phone Grip",
        price : "19.11"
    },
    {
        index:1,
        name : "Crystal Phone holder",
        price : "10.14"
    },
    {
        index:2,
        name : "Crystal Microphone",
        price : "15.12"
    },
    {
        index:3,
        name : "Crystal Agaet Phone Grip",
        price : "9.11"
    },
    {
        index:4,
        name : "Crystal Phone Holder",
        price : "14"
    },
    {
        index:5,
        name : "Crystal Earphone",
        price : "17.77"
    },
    {
        index:6,
        name : "Crystal Agaet Phone Grip",
        price : "19.11"
    },
    {
        index:7,
        name : "Crystal Phone Holer",
        price : "25.11"
    },
]


const Homepage = () => {
    const navigate = useNavigate();
    const [currentCard , setCurrentCard] = useState(cardData[0].index);

    const listArray = [
        {item: "1"},
        {item: "2"},
        {item: "3"},
        {item: "4"},
        {item: "5"},
        {item: "6"},
    ]

  return (
    <div>

        {/* 69ADFF  7CDDf1 */}

        {/* section 1  */}
        <div className='relative mb-[4rem] max-w-[1437px] background  mx-auto  bg-gradient-to-r from-[#7CDDf1] to-[#69ADFF] '>
             {/* <div className='absolute bgGrade h-[4rem] w-[4rem] top-0 left-[10%]'></div> */}
            <Navbar/>
            <div className=' absolute bottom-[0rem]  left-0 w-full z-0 object-cover'>
                <img src={bg1} alt='Bg-1'  className='w-full object-cover' />
            </div>
            <div className='w-11/12 max-w-maxContent mx-auto z-10 relative items-center flex flex-col lg:flex-row lg:gap-x-4 '>
              {/* hero Section */}
                <div className='lg:w-[55%] flex flex-col justify-center h-full  py-[1rem] space-y-5 md:space-y-[3rem] '>
                   <div className='md:space-y-1'>
                      <h2 className='md:text-3xl text-xl ml-1 sm:text-left text-center text-white font-[400]'>Welcome to</h2>
                      <h1 className='md:text-6xl text-center sm:text-left text-3xl text-white font-semibold'>Pop Rock Crystal Shop!</h1>
                   </div>

                   <p className='lg:w-[60%] text-center sm:text-left  font-light' >Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>

                   <div className='flex flex-col sm:flex-row gap-y-3 gap-x-3'>
                       <button onClick={() => navigate("/home")} className='cursor-pointer px-8 py-3 bg-white text-cyan-500 rounded-xl uppercase text-sm hover:scale-95 transition-all duration-200'>Shop Now</button>
                       <button className='px-8 py-3 font-light text-black'>about us</button>
                   </div>
               </div>
               <div className='lg:w-[45%] lg:relative flex flex-col items-center h-full justify-center mx-auto '>
                    <div className='my-[2rem] max-w-[569px] lg:w-[90%]  flex flex-col max-h-[554px] lg:h-[554px] p-[2rem] items-center mx-auto justify-around  bg-white shadow-xl rounded-3xl '>
                          <div className=''>
                            <div className='absolute hidden lg:block bg-[#8A93E5] px-5 py-2 text-white left-[5%] rounded-r-md top-[23%]'> New Lot</div>
                               <img src={pic1} alt='pic' className='w-[300px] select-none' />
                          </div>
                          <div className='flex  flex-col gap-y-1 items-center md:flex-row gap-x-1'>
                              <p className='uppercase font-[400] text-sm sm:text-lg text-gray-500'>Crystal agate phone grip </p> 
                              <p className='text-lg font-semibold text-cyan-800'> - 18.99$</p>
                          </div>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <button className='p-[0.4rem] hover:scale-110 transition-all duration-200 hover:bg-[#545db0] bg-[#8A93E5] rounded-md'>
                           <FaArrowLeft size={10} className='text-white' />
                        </button>
                        <div>
                           <ul className='flex gap-x-3'>
                              {listArray.map( (item , index) => (
                                  <li key={index}>
                                      <FaCircle className={`${index === 0 ? "text-[#8A93E5]" : "text-[#D7DBFF]"}`} size={14} />
                                  </li>
                              ))}
                           </ul>
                        </div>
                        <button className='p-[0.4rem] hover:scale-110 transition-all duration-200 hover:bg-[#545db0] bg-[#8A93E5] rounded-md'>
                            <FaArrowRight size={10} className='text-white'/>
                        </button>
                    </div>
               </div>
            </div>

            <div className='flex relative items-center mt-6 z-[15] text-[#307189] justify-center gap-x-3'>
                  <div className='flex flex-col items-center gap-y-1'>
                    <BsMouse size={20} />
                    <FaCircle size={5}/>
                  </div>
                  <p>scroll down</p>
            </div>
        </div>

        {/* section 2  */}
        <div className=''>
             <div className='w-11/12 max-w-maxContent mx-auto'>
                <h2 className='pt-5 text-3xl md:text-5xl text-[#31546D] font-semibold text-center'>All product</h2>
                <div className='w-[4.5rem] rounded-full my-4 mx-auto h-1 bg-gray-400'></div>
                <div className='flex items-center sm:flex-row flex-col sm:justify-evenly  lg:justify-start lg:gap-x-10 mt-8 my-4'>
                     <div className='flex flex-row items-center gap-x-3'>
                        <p className='text-[#9AB0C0] font-semibold text-sm md:text-lg'>Filter:</p>
                        <div className='flex items-center text-[#31546D] cursor-pointer font-semibold text-sm md:text-lg gap-x-1'>All Products <span><GoTriangleDown /></span></div>
                     </div>

                     <div className='flex items-center gap-x-3'>
                        <p className='md:text-lg text-sm font-semibold text-[#9AB0C0]'>Sort:</p>
                        <div className='flex items-center text-[#31546D] cursor-pointer font-semibold text-sm md:text-lg gap-x-1'>Best Selling <span><GoTriangleDown/></span></div>
                     </div>
                </div>
                {/* Card Section  */}
                <div className='my-[4rem] relative z-[20] mx-auto w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        cardData.map( (ele, ind) => {
                            return (
                                <Card
                                    key={ind}
                                    cardContent = {ele}
                                    currentCard = {currentCard}
                                    setCurrentCard = {setCurrentCard}
                                />
                            )
                        })
                    }
                </div>

                {/* <div className='text-center text-xs w-fit mx-auto cursor-pointer my-[2rem] font-sans px-10 py-3 font-semibold rounded-xl hover:scale-95 transition-all bg-white text-[#75CCEB] border-2 border-[#75CCEB] duration-200 uppercase '>View All</div> */}
             </div>
        </div>

        {/* Section 3 */}
        <div className='relative  max-w-[1437px]  mx-auto pb-[3rem]  bg-gradient-to-r from-[#7CDDf1] to-[#69ADFF]'>
            <div className=' absolute md:-top-[15%]  z-0 object-contain'>
                <img src={Vector2} alt='Bg-1'  className=' object-contain w-full h-[50%] ' />
            </div>
            <div className='text-center z-[10] text-xs w-fit mx-auto cursor-pointer my-[2rem] relative font-sans px-10 py-3 font-semibold rounded-xl hover:scale-95 transition-all bg-white text-[#75CCEB] border-2 border-[#75CCEB] duration-200 uppercase '>View All</div>
            <div className='w-11/12 relative max-w-maxContent mx-auto z-[10] flex flex-col lg:flex-row gap-x-5'>
                <div className='lg:w-[55%] w-full flex flex-col h-full justify-center pt-[3rem] pb-[3rem] items-center lg:items-end space-y-[3rem]'>
                   <div>
                      <h3 className='md:text-4xl text-xl uppercase text-center lg:text-end text-[#31546D]'>Best Price</h3>
                      <h1 className='md:text-6xl text-3xl text-center lg:text-end font-bold text-[#31546D]'>Agate Phone Grip</h1>
                   </div>
                   <div className='flex flex-row items-center gap-x-4'>
                      <p className='md:text-xl text-lg text-[#41A0B7] line-through'>44.50$</p>
                      <p className='md:text-6xl text-3xl font-bold text-[#E35B3E]'>19.50$</p>
                   </div>
                   <p className='text-[#31546D] md:w-[60%] leading-[1.6] font-light text-center  lg:text-end'>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!</p>
                   <div>
                     <button className='bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] text-white  px-10 py-3 font-semibold rounded-xl hover:scale-95 transition-all duration-200 uppercase'>Buy Now</button>
                   </div>
                </div>
                <div className='lg:w-[45%] lg:relative flex flex-col bg-[#ffffff] bg-opacity-10 md:px-[4rem] py-[1rem] px-[1rem] lg:px-0 md:py-[4rem] rounded-full items-center h-full justify-center mx-auto  '>
                    <div className='max-w-[569px] lg:w-[90%]  flex flex-col max-h-[554px] lg:h-[484px] p-[2rem] md:p-[6rem] items-center mx-auto justify-around  bg-white shadow-2xl rounded-full'>
                        <div className='w-full h-full flex items-center justify-center rounded-full shadow-2xl'>
                            <img src={pic1} alt='tag1'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* section 4 */}
        <div className='w-full mx-auto h-[13rem] relative z-20 bg-[#0A294DCC]'>
        </div>

    </div>
  )
}

export default Homepage