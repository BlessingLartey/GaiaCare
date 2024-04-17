import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <nav className="sidebar">
        <ul>
          <b>
            <li>
              <NavLink to="/">Facilitator Appraisal</NavLink>
            </li>
          </b>

          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profile</NavLink>
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
