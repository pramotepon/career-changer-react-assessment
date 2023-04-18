import { useEffect, useState } from "react"
import HomeLayOut from "./Layouts/HomeLayOut"
import User from "./components/User";
import Admin from "./components/Admin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [employees, setEmployee] = useState(mockEmployees);
  const [sector, setSector] = useState('normal');

  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

  const showEmployees = (employee) => {
    return (
      <tr key={employee.id}>
        <td>{employee.name}</td>
        <td>{employee.lastname}</td>
        <td>{employee.position}</td>
      </tr>
    )
  }

  const showAdminEmployees = (employee) => {
    return (
      <tr key={employee.id}>
        <td>{employee.name}</td>
        <td>{employee.lastname}</td>
        <td>{employee.position}</td>
        <td><button onClick={() => onDelete(employee.id)}>Delete</button></td>
      </tr>
    )
  }

  const onClickHandler = (paramSector) => {
    setSector(paramSector);
  }

  const onClickSaveEmployee = () => {
    let lastElement = employees[employees.length - 1];

    const new_id = lastElement.id + 1;
    
    const newEmployee = {
      id: new_id, 
      name: name,
      lastname: lastname,
      position: position,
    }
    setEmployee([...employees, newEmployee]);
  }

  const onDelete = (id) => {
    // console.log('Delete id', id);
    setEmployee(employees.filter((employee) => employee.id !== id))
  }

  useEffect(() => {

  }, [sector, employees]);

  if (sector === 'user') {
    return (
      <User onClickHandler={onClickHandler} showEmployees={showEmployees} employees={employees} />
    )
  } else if (sector === 'admin') {
    return (
      <Admin onClickHandler={onClickHandler} onClickSaveEmployee={onClickSaveEmployee} employees={employees} showAdminEmployees={showAdminEmployees} setName={setName} setLastname={setLastname} setPosition={setPosition} onDelete={onDelete} />
    )
  } else {
    return (
      <HomeLayOut>
        <h1>Generation Thailand<br /> React - Assessment</h1>
        <button onClick={() => setSector('user')}>User Home Sector</button>
        <button onClick={() => setSector('admin')}>Admin Home Sector</button>
      </HomeLayOut>
    )
  }
}



export default Home
