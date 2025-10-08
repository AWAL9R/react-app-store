import React, { Suspense } from 'react';

import Hero from '../Hero';
import Trust from '../Trust';
import HomeApps from './HomeApps';
import { Loader, NavigationLoading } from '../Main';

const dataPromise=fetch("data.json").then(res=>res.json());

const Home = () => {
    return (
        <>
            <Hero />
            <Trust />
            <Suspense fallback={<div className='my-500'><Loader/></div>}>
            <HomeApps isHome={true} dataPromise={dataPromise}/>
            </Suspense>
        </>
    );
};

export default Home;