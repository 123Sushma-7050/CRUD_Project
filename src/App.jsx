import React, { useEffect, useState } from "react";
import TableDetails from "./components/TableDetails";
import { v4 as uuid } from "uuid";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
  });
  const [personalDetails, setPersonalDetails] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setPersonalDetails([...personalDetails, { id: uuid(), ...formData }]);
    setFormData({ name: "", email: "", mobileNo: "" });
  };

  const handleDelete = (id) => {
    alert("Do you want to delete the Item?");
    const deletedItems = personalDetails.filter((items) => {
      return items.id !== id;
    });

    setPersonalDetails(deletedItems);
  };

  const handleEdit = (id) => {
    const editableItem = personalDetails.find((items) => {
      return items.id === id;
    });
    setFormData(editableItem);
  };

  useEffect(() => {
    const retrievedItems = JSON.parse(localStorage.getItem("TABLE_ITEM"));
    if (retrievedItems) {
      setPersonalDetails(retrievedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TABLE_ITEM", JSON.stringify(personalDetails));
  }, [personalDetails]);

  return (
    <div className="container border border-dark">
      <h3 className="text-center my-5  p-3">CRUD Project</h3>

      <form>
        <div className="row align-items-start">
          <div className="col mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-4 mt-4 pt-2 text-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <hr />
      <TableDetails
        personalDetails={personalDetails}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
