import React from 'react';
import { NavLink } from 'react-router';
import { FaInstagram,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='mt-20 bg-[#244D3F] pt-18 pb-7 w-full'>
             <div className='max-w-277.5 mx-auto'> 
                 <div className='footer-logo'>
                     <h2 className='text-center font-extrabold text-[50px] text-white'>Keen<span className='font-medium'>Keeper</span></h2>
                      <p className='text-center text-white/80'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                 </div>

                 <div className='social-icon mt-4 '>
                    <h3 className='text-white text-center text-[20px] font-medium'>Social Links</h3>
                    <ul className='flex justify-center mt-3 gap-3'>
                        <li className='bg-white rounded-full p-1.5'><a href="#"><FaInstagram/></a></li>
                        <li className='bg-white rounded-full p-1.5'><a href="#"><FaFacebook /></a></li>
                        <li className='bg-white rounded-full p-1.5'><a href="#"><FaXTwitter /></a></li>
                    </ul>
                 </div>

                 <div className='devider border-b border-[#868686] mt-5'>

                 </div>

                <div className='footer-bottom mt-5 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-[#FAFAFA]/50'>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex gap-5'>
                        <li className='text-[#FAFAFA]/50'><NavLink to="/">Privacy Policy</NavLink></li>
                        <li className='text-[#FAFAFA]/50'><NavLink to="/">Terms of Service </NavLink></li>
                        <li className='text-[#FAFAFA]/50'><NavLink to="/">Cookies</NavLink></li>
                        
                    </ul>
                </div>

             </div>
        </div>
    );
};

export default Footer;