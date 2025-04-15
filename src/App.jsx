import { useState, useEffect } from "react";
import "./App.css";
import EmployeesData from "./components/EmployeesData";
import Home from "./components/Home";

function App() {
  const [userData, setUserData] = useState(0);

  // use useEffect Hook  to bind data

  useEffect(() => {
    setUserData(EmployeesData);
  }, []);

  return (
    <>
      <Home />
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <tr>{item.id}</tr>
                  <tr>{item.name}</tr>
                  <tr>{item.age}</tr>
                  <tr>{item.role}</tr>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
