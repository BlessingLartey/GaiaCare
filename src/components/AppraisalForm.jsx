import React, { useState } from "react";
import "../Styles/AppraisalForm.css";

const AppraisalForm = () => {
  const [formData, setFormData] = useState({
    facilitatorName: "",
    facilitatorId: "",
    department: "",
    appraisalDate: "",
    managerName: "",
    managerComments: "",
    supervisorId: "",
    supervisorPosition: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Clear form fields after submission
    setFormData({
      facilitatorName: "",
      facilitatorId: "",
      department: "",
      appraisalDate: "",
      managerName: "",
      managerComments: "",
      supervisorId: "",
      supervisorPosition: "",
    });
  };

  return (
    <div className="appraisal-form-container">
      <h2>Facilitator Appraisal Form</h2>
      <form className="appraisal-form" onSubmit={handleSubmit}>
        <div className="facilitator-details">
          <h3>Facilitator Details</h3>

          <div className="input-container">
            <label htmlFor="facilitatorName">Facilitator Name:</label>
            <input
              type="text"
              id="facilitatorName"
              name="facilitatorName"
              value={formData.facilitatorName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="facilitatorId">Facilitator ID:</label>
            <input
              type="text"
              id="facilitatorId"
              name="facilitatorId"
              value={formData.facilitatorId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
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
        </div>
        <div className="supervisor-details">
          <h3>Supervisor Details</h3>
          <div className="input-container">
            <label htmlFor="managerName">Supervisor Name:</label>
            <input
              type="text"
              id="managerName"
              name="managerName"
              value={formData.managerName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="supervisorId">Supervisor ID:</label>
            <input
              type="text"
              id="supervisorId"
              name="supervisorId"
              value={formData.supervisorId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="supervisorPosition">Supervisor's Position:</label>
            <input
              type="text"
              id="supervisorPosition"
              name="supervisorPosition"
              value={formData.supervisorPosition}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="managerComments">Supervisor's Comments:</label>
            <textarea
              id="managerComments"
              name="managerComments"
              value={formData.managerComments}
              onChange={handleChange}
              rows="4"
              cols="50"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppraisalForm;
