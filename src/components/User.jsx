import React from 'react'
import HomeLayOut from '../Layouts/HomeLayOut'

const User = ({ onClickHandler, showEmployees, employees }) => {
    return (
        <HomeLayOut>
            <h1>Generation Thailand<br /> Home - User Sector</h1>
            <button onClick={() => onClickHandler('user')}>User Home Sector</button>
            <button onClick={() => onClickHandler('admin')}>Admin Home Sector</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(showEmployees)}
                </tbody>
            </table>
        </HomeLayOut>
    )
}

export default User