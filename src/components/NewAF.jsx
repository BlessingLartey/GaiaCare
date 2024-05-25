import React, { useState } from "react";
import "../Styles/AppraisalForm.css";
import { useNavigate } from "react-router-dom";
// import Agroforestry from "./Agroforestry";

// import DepartmentPage from "./DepartmentPage";

const NewAF = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    departmentId: "",
    department: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);

    navigate(`/${formData.department}`);

    // Fetch API to post data
    fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((formData) => console.log(formData))
      .catch((error) => console.error("Error:", error));

    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      departmentId: "",
      department: "",
    });
  };

  // Render the form and Agroforestry component conditionally based on the selected department
  return (
    <div className="appraisal-form-container">
      <h2>Facilitator Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="facilitator-details">
          <div className="input-container">
            <label htmlFor="name">Facilitator Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="departmentId">Facilitator ID:</label>
            <input
              type="text"
              id="departmentId"
              name="departmentId"
              value={formData.departmentId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="department">Department:</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select a department</option>
              <option value="awarenessRaising">Awareness Raising</option>
              <option value="agroforestry">Agroforestry</option>
              <option value="beeKeeping">BeeKeeping</option>
              <option value="improvedCook">Improved Cookstove</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="appraisalDate">Appraisal Date:</label>
            <input
              type="date"
              id="appraisalDate"
              name="appraisalDate"
              value={formData.appraisalDate}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-button" type="submit">
            submit
          </button>
        </div>
      </form>
      {/* <div className="newafagro">
        <Agroforestry name={formData.name} department={formData.department} />
      </div> */}
    </div>
  );
};

export default NewAF;
