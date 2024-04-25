import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import NewAF from "./NewAF";
import Agroforestry from "./Agroforestry";

export default function Wizzard() {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
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
        onComplete={handleComplete}
        title={customTitleTemplate()}
        color="green"
        stepSize="md"
      >
        <FormWizard.TabContent title="Facilitator details" icon="ti-user">
          <NewAF />
        </FormWizard.TabContent>
        <FormWizard.TabContent title="KPI assessment" icon="ti-book">
          <Agroforestry />
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
