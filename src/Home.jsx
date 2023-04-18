import { useEffect, useState } from "react"
import HomeLayOut from "./Layouts/HomeLayOut"
import User from "./components/User";
import Admin from "./components/Admin";
import Button from "./components/Button";

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

  if (sector === 'user') {
    return (
      <User onClickHandler={onClickHandler} employees={employees} />
    )
  } else if (sector === 'admin') {
    return (
      <Admin onClickHandler={onClickHandler} setEmployee={setEmployee} employees={employees} name={name} lastname={lastname} position={position} setName={setName} setLastname={setLastname} setPosition={setPosition} />
    )
  } else {
    return (
      <HomeLayOut>
          <h1>Generation Thailand<br /> React - Assessment</h1>
          <Button onClickHandler={onClickHandler} />
      </HomeLayOut>
    )
  }
}



export default Home
