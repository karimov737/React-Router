import React from 'react'
import Nav from '../Components/Nav'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

export default HomeLayout