import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Reser from "./routes/Reser";
import Commu from "./routes/Commu";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DALA/reserv" element={<Reser />} />
          <Route path="/DALA/commu" element={<Commu />} />
          <Route path="/DALA/login" element={<Login />} />
          <Route path="/DALA/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
