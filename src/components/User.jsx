import React, { useEffect } from 'react'
import HomeLayOut from '../layouts/HomeLayout'
import Button from './Button'

const User = ({ onClickHandler, employees }) => {
    const showEmployees = (employee) => {
        return (
            <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
            </tr>
        )
    }

    return (
        <HomeLayOut>
            <h1>Generation Thailand<br /> Home - User Sector</h1>
            <Button onClickHandler={onClickHandler} />

            <table className='table mt-5'>
                <thead className='table-light'>
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