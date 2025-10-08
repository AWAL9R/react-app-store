import React, { Suspense, use, useEffect, useState } from 'react';
import { installApp, uninstall } from './install_utils';
import AppCard, { AppCardInline } from '../apps/AppCard';


const dataPromise = fetch("data.json").then(res => res.json());


const Installs = () => {
    const [totalInstalled, setTotalInstalled] = useState(0)
    const [sortby, setSortby] = useState(0)
    const handleSortBy = (event) => {
        if (event.target.value == 'size') {
            setSortby(1);
        }
        else if (event.target.value == 'downloads') {
            setSortby(2);
        }
        else{
            setSortby(0)
        }
    };

    return (
        <div className=' bg-[#D2D2D2]'>
            <div className="container text-center py-20">
                <div>
                    <div className='text-5xl font-bold my-5'>Your Installed Apps</div>
                    <div className='text-gray-600 text-[20px]'>Explore All Trending Apps on the Market developed by us</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='text-2xl font-semibold'>{totalInstalled} Apps found</div>
                    <div>
                        <select onChange={(event) => { handleSortBy(event); }} className='border border-gray-400 p-3 focus:outline-none'>
                            <option value="">Sort by Default</option>
                            <option value="size">Sort by Size</option>
                            <option value="downloads">Sort by Downloads</option>
                        </select>
                    </div>
                </div>
                <div>
                    <Suspense fallback={<p>loading...</p>}>
                        <InstalledApp dataPromise={dataPromise} setTotalInstalled={setTotalInstalled} sortby={sortby}></InstalledApp>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};


const InstalledApp = ({ dataPromise, setTotalInstalled, sortby }) => {
    let apps = use(dataPromise);
    let installedApps = installApp(null);
    const [installed, setInstalled] = useState(installedApps);
    const removeInstalled = (event, id) => {
        uninstall(event, id, () => { setInstalled([...installed.filter(item => item != id)]); setTotalInstalled(installed.length) })
    }
    apps = apps.filter(app => installed.includes(app.id))
    if (sortby != 0) {
        apps = apps.sort((a, b) => {
            if (sortby == 1) {
                return a.size - b.size;
            }
            return a.downloads - b.downloads;
        })
    }


    useEffect(() => {
        setTotalInstalled(installed.length)
    })

    return (
        <div>
            {
                apps.map(app => <AppCardInline key={app.id} app={app} isInstalled={true} removeInstalled={removeInstalled}></AppCardInline>)
            }
        </div>
    )
};

export default Installs;