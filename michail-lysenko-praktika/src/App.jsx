import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Task1 from "./pages/Project1/Task1";
import Task2 from "./pages/Project1/Task2";
import Task3 from "./pages/Project1/Task3";
import Task21 from "./pages/Project2/Task21";
import Task22 from "./pages/Project2/Task22";
import Task23 from "./pages/Project2/Task23";
import Task31 from "./pages/Project3/Task31";
import Task32 from "./pages/Project3/Task32";
import Task33 from "./pages/Project3/Task33";


const App = () => {
  return (
    <Router>
      <Menu />

      <main className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1/task1" element={<Task1 />} />
        <Route path="/project1/task2" element={<Task2 />} />
        <Route path="/project1/task3" element={<Task3 />} />
        <Route path="/project2/task1" element={<Task21 />} />
        <Route path="/project2/task2" element={<Task22 />} />
        <Route path="/project2/task3" element={<Task23 />} />
        <Route path="/project3/task1" element={<Task31 />} />
        <Route path="/project3/task2" element={<Task32 />} />
        <Route path="/project3/task3" element={<Task33 />} />
      </Routes>
      </main>
    </Router>
  );
};

export default App;

