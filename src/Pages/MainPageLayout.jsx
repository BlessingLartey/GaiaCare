import { Outlet } from "react-router-dom";

function MainPageLayout() {
  return (
    <>
      <div>
        {/* <ul>
          <li>
            <NavLink to="/login"></NavLink>
          </li>
        </ul> */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainPageLayout;
