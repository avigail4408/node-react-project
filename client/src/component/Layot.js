import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

import React from 'react'; 
import { Image } from 'primereact/image';
const Layout = ()=>{
    return <>
    <Navbar></Navbar>
        <main>

            <Outlet></Outlet>
        </main>
    </>
}

export default Layout