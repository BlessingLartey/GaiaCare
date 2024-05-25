import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import Login from "./components/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import EmployeesAppraisal from "./Pages/EmployeesAppraisal";
import NotFound from "./Pages/NotFound";
import MainPageLayout from "./Pages/MainPageLayout";
import Settings from "./Pages/Settings";
import Dashboard from "./Pages/Dashboard";
import Agroforestry from "./components/Agroforestry";
import AwarenessRaising from "./components/AwarenessRaising";
import BeeKeeping from "./components/BeeKeeping";
import ImprovedCook from "./components/ImprovedCook";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPageLayout />}>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Home />}>
        <Route index element={<EmployeesAppraisal />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="agroforestry" element={<Agroforestry />} />
        <Route path="awarenessRaising" element={<AwarenessRaising />} />
        <Route path="beeKeeping" element={<BeeKeeping />} />
        <Route path="improvedCook" element={<ImprovedCook />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import DepartmentPage from "./Pages/DepartmentPage";
// // import NewAF from "./components/NewAF";
// import Wizard from "./components/Wizzard";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/form" />} />
//         <Route path="/form" element={<Wizard />} />
//         <Route path="/:department" element={<DepartmentPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
