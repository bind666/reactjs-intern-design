import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import AccountSettings from "./components/AccountSettings.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/signup.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;