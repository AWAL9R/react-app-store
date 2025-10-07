import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
// import { Outlet } from 'react-router';

// import { RouterProvider, Outlet, useNavigation } from "react-router-dom";


// function NavigationLoading() {
//   const nav = useNavigation();
//   const loading = nav.state !== "idle"; // "loading" | "submitting" | "idle"
//   if (!loading) return null;
//   return (
//     <div className="nav-loading-overlay" aria-hidden="true">
//       <div className="nav-spinner" />
//     </div>
//   );
// }

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;