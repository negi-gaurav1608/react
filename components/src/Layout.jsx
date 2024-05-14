import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer2 from './Footer/Footer2'
import Header2 from './Header/Header2'
function Layout() {
    return (
        <>
            <Header2/>
            <Outlet/>
            <Footer2/>
        </>
        
    )
}

export default Layout

