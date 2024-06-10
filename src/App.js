import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import AuthScreen from "./pages/AuthScreen.jsx";
import ContactsScreen from "./pages/ContactsScreen.jsx"
import { UserProvider } from "./context/UserContext.jsx"
import { ContactProvider } from "./context/ContactContext.jsx";

function App() {
  return (
    <>
      <UserProvider>
        <ContactProvider>
          <Router>
            <Routes>
              <Route path="/" element={<AuthScreen />} />
              <Route path="/home" element={<ContactsScreen />} />
            </Routes>
          </Router>
        </ContactProvider>
      </UserProvider>
    </>
  );
}

export default App;
