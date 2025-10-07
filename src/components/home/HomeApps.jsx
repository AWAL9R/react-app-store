import React, { use } from 'react';
import AppCard from '../apps/AppCard';
import { Link } from 'react-router';

const HomeApps = ({ dataPromise }) => {
    let apps = use(dataPromise);
    console.log(apps[0]);
    return (
        <div className=' bg-[#D2D2D2] py-10 flex flex-col items-center gap-7'>
            <div className="container grid grid-cols-4 gap-4">
                {apps.map((item, index) => {
                    if(index>7){ return null; }
                    return <AppCard key={item.id} app={item} />
                })}
            </div>
            <div><Link to="/apps"><button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex gap-1 items-center rounded-md py-3 px-6 text-white font-bold text-[20px]'>Explore More</button></Link></div>
        </div>
    );
};

export default HomeApps;