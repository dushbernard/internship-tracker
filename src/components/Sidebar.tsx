import { Link, useNavigate } from "react-router-dom";
import "../styles/main.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="sidebar">
        <h2>InternTrack</h2>

        <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/board">Tasks</Link></li>
            <li><Link to="/add-task">Add Task</Link></li>
            <li><button onClick={handleLogout} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontSize: "inherit" }}>Logout</button></li>
        </ul>
    </div>
    );
}
export default Sidebar;