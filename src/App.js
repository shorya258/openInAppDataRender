import "./App.css";
import Background from "./Components/Background";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
const clientId = process.env.REACT_APP_CLIENT_ID;
function App() {
  let apiKey = process.env.REACT_APP_API_KEY;
  console.log(`react api key${process.env.REACT_APP_API_KEY}`);
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
        <Route
          exact
          path="/dashboard"
          element={<Dashboard apiKey={apiKey} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
