import React from 'react';
import { Link } from 'react-router';

const Error404 = () => {
    return (
        <div className='flex flex-col justify-center items-center my-20 gap-7'>
            <img src='assets/error-404.png'/>
            <div className='text-5xl font-bold'>Oops, page not found!</div>
            <div className='text-gray-600'>The page you are looking for is not available.</div>
            <div><Link to="/"><button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex gap-1 items-center rounded-md py-3 px-6 text-white font-bold text-[20px]'>Go Home!</button></Link></div>
        </div>
    );
};

export default Error404;