import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
// import { Outlet } from 'react-router';

import { RouterProvider, Outlet, useNavigation, useLocation } from "react-router";


export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}

function NavigationLoading() {
    const nav = useNavigation();
    const loading = nav.state !== "idle"; // "loading" | "submitting" | "idle"
    if (!loading) return null;
    return (
        <div className="nav-loading-overlay" aria-hidden="true">
            <div className="nav-spinner" />
            Navigating...
        </div>
    );
}

const Main = () => {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <NavigationLoading />
            <Outlet />
            <Footer />

        </>
    );
};

export default Main;