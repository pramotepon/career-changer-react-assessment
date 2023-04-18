import React, { useEffect } from 'react'
import HomeLayOut from '../Layouts/HomeLayOut'
import Button from './Button'

const Admin = ({ onClickHandler, setEmployee, employees, name, lastname, position, setName, setLastname, setPosition }) => {

    const onClickSaveEmployee = () => {
        let lastElement = employees[employees.length - 1];
        let new_id = 0;
        employees.length === 0 ? new_id = 0 : new_id = lastElement.id + 1 ;
        const newEmployee = {
            id: new_id,
            name: name,
            lastname: lastname,
            position: position,
        }
        setEmployee([...employees, newEmployee]);
        setName('');
        setLastname('');
        setPosition('');
    }

    const onDelete = (id) => {
        // console.log('Delete id', id);
        // console.log(employees.splice(id, 1));
        // employees.splice(id, 1)
        // console.log(employees);
        // console.log(employees.filter((employee) => employee.id !== id));
        // setEmployee([...employees]);
        setEmployee(employees.filter((employee) => employee.id !== id))
    }


    const showEmployees = (employee) => {
        return (
            <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td><button className='btn text-danger' onClick={() => onDelete(employee.id)}>Delete</button></td>
            </tr>
        )
    }


    return (
        <HomeLayOut>
            <h1>Generation Thailand<br /> Home - Admin Sector</h1>
            <Button onClickHandler={onClickHandler} />

            <h3 className='mt-3'>Create User Here</h3>
            <input type='text' className='ms-3' placeholder='name' onChange={(e) => setName(e.target.value)} value={name || ''} />
            <input type='text' className='ms-3' placeholder='lastname' onChange={(e) => setLastname(e.target.value)} value={lastname || ''} />
            <input type='text' className='ms-3' placeholder='position' onChange={(e) => setPosition(e.target.value)} value={position || ''} />
            <button className='btn btn-primary ms-3' onClick={onClickSaveEmployee}>Save</button>

            <table className='table mt-5'>
                <thead className='table-light'>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(showEmployees)}
                </tbody>
            </table>

            <button className='btn btn-danger' onClick={() => setEmployee([])}>Delete All</button>
        </HomeLayOut>
    )
}

export default Admin