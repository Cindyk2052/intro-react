import React from "react";
import { useState } from "react";

const initialUsers = [
  { id: 1, name: "Chalo", lastname: "Salvador" },
  { id: 2, name: "María", lastname: "Morales" },
  { id: 3, name: "Andrés", lastname: "Andrade" },
];

const Users = () => {
  //const state = useState(null);
  //console.log("Satate: ", state);

  const [users, setUsers] = useState(initialUsers); //use satate, es un arreglo con dos elementos, el primero es una variable inicial de estado y el segundo es una funcion
  const [error, setError] = useState(false);

  const handleAddUser = () => {
    console.log("click");
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;

    //validar datos
    if (name === "" || lastname === "") {
      setError("Ingrese los datos");
      return;
    }

    console.log("Nombre", name);
    console.log("Apellido", lastname);

    const newUser = {
      id: users.length,
      name,
      lastname,
    };

    // let newUsers = [];
    // users.forEach((user, index)=>{
    //    newUsers[index] = user;
    // })
    // newUsers[newUsers.length] = newUser;

    const newUsersList = [...users, newUser];
    setUsers(newUsersList);

    // setUsers((prevState) => {[...prevState, newUser]})
  };
  return (
    <div>
      <h1>Crear un nuevo usuario</h1>
      <div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" />
        </div>

        <div className="error">Ingrese todos los campos</div>

        <div>
          <label htmlFor="lastname">Apellido</label>
          <input type="text" id="lastname" />
        </div>

        <div>
          <button onClick={handleAddUser}>Agregar usuario</button>
        </div>
      </div>
      <h1>Lista de usuarios ({users.length} en total)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
