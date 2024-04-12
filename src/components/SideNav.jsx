import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <nav className="sidebar">
        <ul>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="appraisal">Facilitator Appraisal</NavLink>
          </li>
          <li>
            <NavLink to="settings">settings</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
