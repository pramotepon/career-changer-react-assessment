import React from 'react'
import Navbar from '../components/Navbar'

const HomeLayOut = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='container text-center'>
                {children}
            </div>
        </div>
    )
}

export default HomeLayOut