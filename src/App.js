// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);

        // Check if the data is an object and contains a 'users' property
        if (typeof data === 'object' && data.hasOwnProperty('users')) {
          // Assume 'users' is an array
          setUsers(data.users);
        } else {
          console.error('Data does not contain an array of users:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>User Records</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>
                <img
                  src={user.profile_pic}
                  alt={`${user.first_name} ${user.last_name}`}
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;