import React from 'react';

const Trust = () => {
    return (
        <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-20 flex flex-col justify-center items-center  text-white'>
            <div className='text-5xl'>Trusted by Millions, Built for You</div>
            <div className='flex justify-around my-10 w-3/5'>
                <div className='text-center'>
                    <div className='font-thin'>Total Downloads</div>
                    <div className='text-6xl font-bold'>29.6M</div>
                    <div className='font-thin'>21% more than last month</div>
                </div>

                 <div className='text-center'>
                    <div className='font-thin'>Total Reviews</div>
                    <div className='text-6xl font-bold'>906K</div>
                    <div className='font-thin'>46% more than last month</div>
                </div>

                 <div className='text-center'>
                    <div className='font-thin'>Active Apps</div>
                    <div className='text-6xl font-bold'>132+</div>
                    <div className='font-thin'>31 more will Launch</div>
                </div>
                
            </div>
        </div>
    );
};

export default Trust;