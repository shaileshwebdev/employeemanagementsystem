import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import EmployeeManagementApp from "./Components/EmployeeManagementApp";
import EmployeeDetails from "./Components/EmployeeDetails";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="main page-container">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="employee" />} />
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
