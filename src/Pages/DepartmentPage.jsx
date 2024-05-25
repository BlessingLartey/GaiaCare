// import React from "react";
// import { useParams } from "react-router-dom";
// import AwarenessRaising from "../components/AwarenessRaising";
// import Agroforestry from "../components/Agroforestry";
// import BeeKeeping from "../components/BeeKeeping";
// import ImprovedCook from "../components/ImprovedCook";

// const departmentForms = {
//   awarenessRaising: <AwarenessRaising />,
//   agroforestry: <Agroforestry />,
//   beeKeeping: <BeeKeeping />,
//   improvedCook: <ImprovedCook />,
// };

// const DepartmentPage = () => {
//   const { department } = useParams();
//   return (
//     <div>
//       <h2>{department}</h2>
//       {departmentForms[department] || (
//         <div>No form available for this department.</div>
//       )}
//     </div>
//   );
// };

// export default DepartmentPage;

import React from "react";
import { useParams } from "react-router-dom";
import AwarenessRaising from "../components/AwarenessRaising";

const departmentForms = {
  awarenessRaising: (
    <div>
      Awareness Raising Formr <AwarenessRaising />{" "}
    </div>
  ),
  agroforestry: <div>Agroforestry Form</div>,
  beeKeeping: <div>Bee Keeping Form</div>,
  improvedCook: <div>Improved Cookstove Form</div>,
};

const DepartmentPage = () => {
  const { department } = useParams();
  return (
    <div>
      <h2>{department}</h2>
      {departmentForms[department] || (
        <div>No form available for this department.</div>
      )}
    </div>
  );
};

export default DepartmentPage;
