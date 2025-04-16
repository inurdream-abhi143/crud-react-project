import { useState, useEffect } from "react";
import "./App.css";
import EmployeesData from "./components/EmployeesData";
import Home from "./components/Home";

function App() {
  const [userData, setUserData] = useState([]);
  // make staet for id, name, age, role to handelEdit

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [isUpDate, setIsUpDate] = useState(false);

  // use useEffect Hook  to bind data

  useEffect(() => {
    setUserData(EmployeesData);
  }, []);

  const handelEdit = (id) => {
    const dt = userData.find((item) => item.id === id);
    if (dt !== undefined) {
      setIsUpDate(true);
      setId(id);
      setName(dt.name);
      setAge(dt.age);
      setRole(dt.role);
    }
  };
  const handelDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you Sure you want to delete ")) {
        const dt = userData.filter((item) => item.id !== id);
        setUserData(dt);
      }
    }
  };
  const handelView = (item) => {
    alert(
      `Employee id = ${item.id}\nEmployee Name = ${item.name}\nEmployee Age = ${item.age}\nEmployee Role = ${item.role}`
    );
  };
  return (
    <>
      <Home />
      <div className="Add-section">
        <form>
          <label htmlfor="id">Id</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <label htmlfor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label htmlfor="age">Age</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <label htmlfor="role">Role</label>
          <input
            type="text"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          ></input>

          {isUpDate === true ? (
            <button className="Adbtn">Update</button>
          ) : (
            <button className="Adbtn">Add</button>
          )}

          <button className="Adbtn">Clear</button>
        </form>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Role</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.role}</td>
                  <td>
                    <div className="btns">
                      <button
                        className="Ebtn"
                        onClick={() => handelEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="Dbtn"
                        onClick={() => handelDelete(item.id)}
                      >
                        Delete
                      </button>
                      <button className="Vbtn" onClick={() => handelView(item)}>
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
