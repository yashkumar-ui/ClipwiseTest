import React from 'react'
import basketPic from "../assets/ion_basket.svg"
import cartPic from "../assets/Group 108.svg"
import namePic from "../assets/Frame-2.svg"

const Navbar = () => {
    const listname = [
       { title : "Home"},
       { title : "Shop"},
       { title : "AboutUs"},
       { title : "help"},

    ];

  return (
    <div className='flex h-20 items-center justify-center '>
         <div className='w-11/12 max-w-maxContent mx-auto flex items-center justify-between'>
             <div className='flex items-center gap-x-2'>
                <img src={namePic} alt='navpic' className='w-5'/> 
                <p className='text-white font-light'>Pop Rock Crystal</p>
             </div>
             <div className='flex flex-row justify-between lg:w-[45%] '>
                 {/* List item */}
                 <div className=' hidden lg:block'>
                    <ul className='flex flex-row gap-x-8'>
                       {listname.map( (name , index) => (
                        <li className='text-white font-semibold' key={index}>
                            {name.title}
                        </li>
                       ))}
                    </ul>
                 </div>
                 {/* logo  */}
                 <div className='flex items-center  gap-x-1'>
                    <img src={cartPic} alt='cart'/>
                    <img src={basketPic} alt='backet'/>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Navbar