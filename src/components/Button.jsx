import React from 'react'

const Button = ({ onClickHandler }) => {
    return (
        <div>
            <button className='btn btn-light border' onClick={() => onClickHandler('user')}>User Home Sector</button>
            <button className='btn btn-light border ms-3' onClick={() => onClickHandler('admin')}>Admin Home Sector</button>
        </div>
    )
}

export default Button