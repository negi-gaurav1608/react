import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header2 from './Header/Header2'
function Layout() {
    return (
        <>
            <Header2/>
            <Outlet/>
            <Footer/>
        </>
        
    )
}

export default Layout

