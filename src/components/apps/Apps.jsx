import React, { Suspense } from 'react';
import Hero from '../Hero';
import Trust from '../Trust';
import HomeApps from '../home/HomeApps';


const dataPromise = fetch("data.json").then(res => res.json());

const Apps = () => {
    return (
        <>
            <Suspense fallback={<h1>Loading....</h1>}>
                <HomeApps isHome={false} dataPromise={dataPromise} />
            </Suspense>
        </>
    );
};

export default Apps;