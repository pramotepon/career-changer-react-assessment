import React from 'react'
import Navbar from '../components/Navbar'

const HomeLayOut = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default HomeLayOut