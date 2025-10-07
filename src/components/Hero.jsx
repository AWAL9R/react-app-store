import React from 'react';
import { AppName, AppStoreLink, PlayStoreLink } from '../settings';

const Hero = () => {
    return (
        <div className=' flex items-center flex-col gap-7 pt-20'>
            <div className='text-7xl font-bold text-center'>
                We Build
                <div className='flex gap-3'><div className='bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2]'>Productive</div> Apps</div>
            </div>

            <div className='text-[20px] text-gray-500 text-center'>At {AppName} , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</div>
            
            <div className='grid grid-cols-2 gap-3'>
                <a href={PlayStoreLink} className='flex gap-2 border-1 border-gray-400 py-3 px-7 hover:bg-gray-300'><img src='playstore.png' className='w-[30px] h-[30px]' /><button>Google Play</button></a>
                <a href={PlayStoreLink} className='flex gap-2 border-1 border-gray-400 py-3 px-7  hover:bg-gray-300'><img src='appstore.png' className='w-[30px] h-[30px]' /><button>App Store</button></a>
            </div>
            <img src='assets/hero.png'/>
        </div>
    );
};

export default Hero;