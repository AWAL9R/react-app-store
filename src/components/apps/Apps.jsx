import React, { Suspense } from 'react';
import Hero from '../Hero';
import Trust from '../Trust';
import HomeApps from '../home/HomeApps';
import { Loader } from '../Main';


const dataPromise = fetch("data.json").then(res => res.json());

const Apps = () => {
    return (
        <>
            <Suspense fallback={<div className='my-500'><Loader/></div>}>
                <HomeApps isHome={false} dataPromise={dataPromise} />
            </Suspense>
        </>
    );
};

export default Apps;