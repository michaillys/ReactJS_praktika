import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Task1 from "./pages/Project1/Task1";
import Task2 from "./pages/Project1/Task2";
import Task3 from "./pages/Project1/Task3";

import Login from "./pages/Project2/Login";
import Register from "./pages/Project2/Register";
import Dashboard from "./pages/Project2/Dashboard";
import ProtectedRoute from "./pages/Project2/ProtectedRoute";
import { AuthProvider } from "./AuthContext"



import Task31 from "./pages/Project3/Task31";
import Task32 from "./pages/Project3/Task32";
import Task33 from "./pages/Project3/Task33";


const App = () => {
  return (

    <AuthProvider> {}
      <Router>
        <Menu />

        <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1/task1" element={<Task1 />} />
          <Route path="/project1/task2" element={<Task2 />} />
          <Route path="/project1/task3" element={<Task3 />} />


          <Route path="/project2/" element={<h1>Welcome! <a href="/project2/login">Login</a> or <a href="/project2/register">Register</a></h1>} />
          <Route path="/project2/login" element={<Login />} />
          <Route path="/project2/register" element={<Register />} />
          <Route 
            path="/project2/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />



          <Route path="/project3/task1" element={<Task31 />} />
          <Route path="/project3/task2" element={<Task32 />} />
          <Route path="/project3/task3" element={<Task33 />} />
        </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
};

export default App;

