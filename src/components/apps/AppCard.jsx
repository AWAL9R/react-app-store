import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const AppCard = ({app}) => {
    const {image, title, downloads, ratingAvg}=app;
    // console.log(image, title, downloads, ratingAvg);
    return (
        <div className='flex flex-col gap-2 bg-white hover:bg-purple-200 justify-center items-center p-3 rounded-md'>
            <img src={image} alt="" className='w-full h-[310px] xbg-gray-500'/>
            <div className='text-left w-full font-medium text-[20px]'>{title}</div>
            <div className='flex justify-between w-full'>
                <div className='flex gap-1 items-center bg-[#F1F5E8] text-[#00D390] p-1 rounded-md'><FaDownload/> {downloads}M</div>
                <div className='flex gap-1 items-center bg-[#FFF0E1] text-[#FF8811] p-1 rounded-md'><FaStar/> {ratingAvg}</div>
            </div>
        </div>
    );
};

export default AppCard;