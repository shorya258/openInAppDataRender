import "./App.css";
import Background from "./Components/Background";
// import Login from "./Components/Login";
// import Logout from "./Components/GLogout";
// import Signup from "./Components/Signup";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
// require("react-dotenv").config();
// Route, Routes
const clientId =
  "980512281451-t9ppbk7qgsg0qmejr2c06vl0f7p53bpg.apps.googleusercontent.com";
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Background />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
