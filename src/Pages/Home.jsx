import { useNavigate, Outlet } from "react-router-dom";
import "../Styles/Home.css";
import SideNav from "../components/SideNav";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions, such as clearing authentication state
    // For example, you might clear localStorage or session storage
    localStorage.removeItem("authToken");

    // Redirect to login
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div style={{ width: "20%", position: "fixed" }}>
        <SideNav />
      </div>
      <div style={{ width: "80%", position: "absolute", right: "0" }}>
        <nav className="topnav">
          <ul>
            <li>Welcome, User!</li>
            <button onClick={handleLogout}>Logout</button>
          </ul>
        </nav>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
