import React from 'react'
import HomeLayOut from '../Layouts/HomeLayOut'

const Admin = ({ onClickHandler, onClickSaveEmployee, employees, showAdminEmployees, setName, setLastname, setPosition }) => {
    return (
        <HomeLayOut>
            <h1>Generation Thailand<br /> Home - Admin Sector</h1>
            <button onClick={() => onClickHandler('user')}>User Home Sector</button>
            <button onClick={() => onClickHandler('admin')}>Admin Home Sector</button>

            <h3>Create User Here</h3>
            <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='lastname' onChange={(e) => setLastname(e.target.value)} />
            <input type='text' placeholder='position' onChange={(e) => setPosition(e.target.value)} />
            <button onClick={onClickSaveEmployee}>Save</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(showAdminEmployees)}
                </tbody>
            </table>
        </HomeLayOut>
    )
}

export default Admin