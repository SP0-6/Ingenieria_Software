import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const adduser = () => {
    if (name.trim() === "") return;
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = name;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, name]);
    }
    setName("");
  };

  const editUser = (index) => {
    setName(users[index]);
    setEditingIndex(index);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="crud-container">
      <h2 className="crud-title">ABM N°4 - Usuarios</h2>
      <div className="input-group">
        <input
          className="crud-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingrese el usuario"
        />
        <button className="crud-button add " onClick={adduser}>
          {editingIndex !== null ? "Modificar" : "Agregar"}
        </button>
      </div>

      <ul className="crud-list">
        {users.map((user, index) => (
          <li key={index} className="crud-item">
            <span className="crud-text"> {user}</span>
            <div className="button-group">
              <button
                className="crud-button edit"
                onClick={() => editUser(index)}
              >
                Editar
              </button>
              <button
                className="crud-button edit"
                onClick={() => deleteUser(index)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
