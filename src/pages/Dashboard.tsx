import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
    return(
        <div className="container">
            <Sidebar />
            <div className="main">
                <Navbar />
                <div className= "content">
                    <h2>Welcome to the Dashboard</h2>
                    <div className="cards">
                        <div className="card">
                            <h3>Total Tasks</h3>
                            <p>0</p>
                        </div>
                        <div className="card">
                            <h3>completed</h3>
                            <p>0</p>
                        </div>
                        <div className="card">
                            <h3>pending</h3>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;