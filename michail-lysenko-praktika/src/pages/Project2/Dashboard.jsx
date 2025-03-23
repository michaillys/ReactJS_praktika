import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecipeList from "./RecipeList";
import Favorites from "./Favorites";
import { AuthContext } from "../../AuthContext";

const Dashboard = () => {
  const [view, setView] = useState("all");
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/project2/login");
  };

  const renderView = () => (view === "all" ? <RecipeList /> : <Favorites />);

  return (
    <div className="p-4">
      <h1>Recepts</h1>
      <div className="flex gap-4 my-4">
        {["all", "favorites"].map((type) => (
          <button key={type} onClick={() => setView(type)}>
            {type === "all" ? "All recipes" : "Favorites"}
          </button>
        ))}
        <button onClick={handleLogout}>Logout</button>
      </div>
      {renderView()}
    </div>
  );
};

export default Dashboard;
