import React, { useEffect, useState } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import NewAF from "./NewAF";
// import Agroforestry from "./Agroforestry";
import { useLocation } from "react-router-dom";

export default function Wizzard() {
  const location = useLocation();
  const { department: initialDepartment } = location.state || {};

  const [currentPage, setCurrentPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    departmentId: "",
    department: initialDepartment || "",
  });

  useEffect(() => {
    const page = localStorage.getItem("currentPage");
    if (page) {
      setCurrentPage(parseInt(page));
    }
  }, []);

  const handlePageChange = (step) => {
    setCurrentPage(step);
    // Store the current step in local storage
    localStorage.setItem("currentPage", step);
  };
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    console.log(formData.department);

    // Move to the next tab based on the department
    if (formData.department) {
      setCurrentPage(1); // Assuming the second tab index is 1
    }
  };

  const customTitleTemplate = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <h2
          style={{
            color: "green",
          }}
        >
          Employee Appraisal
        </h2>
        <p
          style={{
            color: "purple",
          }}
        >
          Complete the following steps
        </p>
      </div>
    );
  };

  return (
    <>
      <FormWizard
        currentPage={currentPage}
        onStepChange={handlePageChange}
        onComplete={handleComplete}
        title={customTitleTemplate()}
        color="green"
        stepSize="md"
      >
        <FormWizard.TabContent title="Facilitator details" icon="ti-user">
          <NewAF
            formData={formData}
            handleChange={handleFormChange}
            handleSubmit={handleSubmit}
          />
        </FormWizard.TabContent>
        <FormWizard.TabContent title="KPI assessment" icon="ti-book">
          {formData.department && <p>Department: {formData.department}</p>}
        </FormWizard.TabContent>
        <FormWizard.TabContent title="See your supervisor" icon="ti-check">
          <p>See your supervisor</p>
        </FormWizard.TabContent>
      </FormWizard>
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}
