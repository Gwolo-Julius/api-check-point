import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>List of Users</h2>
      <ul>
        {listOfUsers.map((user) => (
          <li className="user_list_names" key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
