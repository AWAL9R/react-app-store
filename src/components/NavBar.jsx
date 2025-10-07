import React from 'react';
import { AppName, GitHubLink } from '../settings';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className='border-b-1 border-b-gray-400 py-2'>
            <div className='container bg-white flex justify-between items-center '>
            <Link to='/' className='flex gap-2 text-nowrap items-center text-2xl font-bold'><img src='logo.png'className='w-[50px] h-[50px]'/>{AppName}</Link>
            <div className='flex gap-3 font-bold'>
                <NavLink to='/' className={({isActive})=>{return isActive?"bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]":"hover:text-[#632EE3]" }}>Home</NavLink>
                <NavLink to='/apps' className={({isActive})=>{return isActive?"bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]":"hover:text-[#632EE3]" }}>Apps</NavLink>
                <NavLink to='/installed' className={({isActive})=>{return isActive?"bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]":"hover:text-[#632EE3]" }}>Installed</NavLink>
            </div>
            <div><a href={GitHubLink}><button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:from-[#5217db] hover:to-[#7d36e0] flex gap-1 items-center rounded-md p-3 text-white font-bold text-[20px]'><FaGithub/> Contribute</button></a></div>
        </div>
        </div>
    );
};

export default NavBar;