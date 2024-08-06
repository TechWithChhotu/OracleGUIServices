import React, { useState, useEffect } from "react";
import axios from "axios";

const GrantPermissionForm = () => {
  const [users, setUsers] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedPermission, setSelectedPermission] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get-db-user", {
          withCredentials: true,
        });
        console.log(response.data.data);

        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handlePermissionChange = (e) => {
    setSelectedPermission(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await axios.post(
        "http://localhost:3000/get-permission",
        {
          username: selectedUser,
          permission: selectedPermission,
        },
        { withCredentials: true }
      );
      alert(res.data.msg);
    } catch (error) {
      setErrorMessage("Error granting permission: " + error.message);
    }
  };

  return (
    <div className="min-h-[80%] w-full max-w-xl mx-auto grid items-center">
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mt-4 text-center">
          Grant Permission
        </h2>
        <p className="text-center mb-4">
          Assign permissions to your database users
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user"
            >
              Select User
            </label>
            <select
              id="user"
              value={selectedUser}
              onChange={handleUserChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled>
                Select a user
              </option>
              {users.map((user, index) => (
                <option key={index} value={user.username}>
                  {console.log(user[0])}
                  {user[0]}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="permission"
            >
              Select Permission
            </label>
            <select
              id="permission"
              value={selectedPermission}
              onChange={handlePermissionChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled>
                Select a permission
              </option>
              {permissions.map((permission) => (
                <option key={permission} value={permission}>
                  {permission}
                </option>
              ))}
            </select>
          </div> */}

          <div className="grid justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Grant Permissions
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GrantPermissionForm;
