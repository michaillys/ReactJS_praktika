import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  

  if (!user) {
    return <Navigate to="/project2/login" />;
  }

  return (
    
    <div>
      <button onClick={logout}>Logout</button>
      <h2>Dashboard</h2>
      <p>Welcome, {user.email}!</p>
    </div>
  );
};

export default Dashboard;

