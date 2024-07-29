import React from "react";

const TableDetails = ({ personalDetails, handleDelete, handleEdit }) => {
  console.log(personalDetails, "per");
  const onDelete = (id) => {
    handleDelete(id);
  };
  const onEdit = (id) => {
    handleEdit(id);
  };
  return (
    <div>
      <table className="table table-bordered" style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {personalDetails &&
            personalDetails.map((details) => {
              return (
                <tr key={details.id}>
                  <td>{details?.name}</td>
                  <td>{details?.email}</td>
                  <td>{details?.mobileNo}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary mx-2"
                      onClick={() => onEdit(details.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => onDelete(details.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetails;
