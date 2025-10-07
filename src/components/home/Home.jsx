import React, { Suspense } from 'react';

import Hero from '../Hero';
import Trust from '../Trust';
import HomeApps from './HomeApps';

const dataPromise=fetch("data.json").then(res=>res.json());

const Home = () => {
    return (
        <>
            <Hero />
            <Trust />
            <Suspense fallback={<h1>Loading....</h1>}>
            <HomeApps isHome={true} dataPromise={dataPromise}/>
            </Suspense>
        </>
    );
};

export default Home;