import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import AuthScreen from "./pages/AuthScreen.jsx";
import ContactsScreen from "./pages/ContactsScreen.jsx"
import { UserProvider } from "./context/UserContext.jsx"

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AuthScreen />} />
            <Route path="/home" element={<ContactsScreen />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
