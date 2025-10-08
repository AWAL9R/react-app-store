import React, { use, useState } from 'react';
import AppCard from '../apps/AppCard';
import { Link } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { Loader, Loader2 } from '../Main';

const HomeApps = ({ isHome, dataPromise }) => {
    const [search, setSearch] = useState("");
    const [loading, setLoading]=useState(false);

    let searchL = search.toLowerCase();
    let apps = use(dataPromise);
    let shownApps = apps.filter((item, index)=>{
      if (isHome & index > 7) { return false; }
      if (search && item.title.toLowerCase().includes(searchL) == false) { return false; }
      return true;
    });
    
    return (
        <div className=' bg-[#E9E9E9] py-10 flex flex-col items-center gap-7'>
            <div className='text-center flex flex-col gap-7'>
                <div className=' text-5xl font-bold max-[800px]:text-4xl max-[600px]:text-3xl '> {isHome ? "Trending Apps" : "Our All Applications"}</div>
                <div className='text-[#627382] text-[20px] max-[600px]:text-[18px]'>{isHome ? "Explore All Trending Apps on the Market developed by us" : "Explore All Apps on the Market developed by us. We code for Millions"}</div>
            </div>

            {isHome ||
                <div className='flex justify-between items-center w-full container p-2'>
                    <div className='text-2xl font-semibold max-[800px]:text-[20px] max-[600px]:text-[18px]'>({shownApps.length}) {search?"Search result":"Total Apps Found"}</div>
                    <label htmlFor='search' className='flex items-center gap-2 border border-gray-800 p-2 focus-within:outline-2 max-[600px]:w-2/5'><FaSearch className='text-gray-500'/> <input type="search" id='search' className='border-0 hover:border-0 focus:border-0 outline-none text-[20px] max-[800px]:text-[18px] max-[600px]:text-[16px] ' autoComplete="off" placeholder='Search apps' onChange={(e) => { setLoading(true); setTimeout(function(){ setLoading(false); setSearch(e.target.value)}, 500); }} /></label>
                </div>
            }

            {loading && <Loader2/> }

            <div className="container grid grid-cols-4 gap-4 max-[800px]:grid-cols-3 max-[650px]:grid-cols-2">
                {loading || shownApps.map((item,) => {
       
        return <AppCard key={item.id} app={item} />
    })}
            </div>
            {isHome && <div><Link to="/apps"><button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:from-[#5217db] hover:to-[#7d36e0] hover:scale-105 transition ease-in-out flex gap-1 items-center rounded-md py-3 px-8 text-white font-bold text-[20px] max-[500px]:text-[18px]'>Explore More</button></Link></div>}
        </div>
    );
};

export default HomeApps;