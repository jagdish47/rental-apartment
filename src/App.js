import Login from "./pages/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
