import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://6381a60e53081dd54985ea33.mockapi.io/crudapp");
    setUser(result.data);
  };

//   const deleteUser = async id => {
//     await axios.delete(`https://6381a60e53081dd54985ea33.mockapi.io/crudapp/${id}`);
//     alert("Sure, you want to delete!!!");
//     loadUsers();
//   };

  return (
    <>
      <div className="py-2">
        <h1 className="text-center">Home Page</h1>
        <p >This is form to fill the reason why you are not be able to attend the evening lecture regularly, please fill this form.</p>
        {/* <input type="text" name="" id="myInput" placeholder="Search by names...." onKeyUp={searchFun()} /> */}
        <div className="card-body">
        <table className="table table-bordered shadow" id="myTable">
          <thead className="bg-black text-center text-white">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Reason</th>
              <th scope="col">Phone No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="tbod">
            {users.map((user, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.reason}</td>
                <td className="text-center">{user.phone_no}</td>
                <td className="text-center">
                  <Link className="btn btn-info mr-2" to={`/user/${user.id}`}>
                     View
                  </Link>
                  {/* <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link> */}
                  {/* <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default Home;