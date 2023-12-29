import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./components/context/userContext";
import { UserLoginProvider } from "./components/context/userLoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserLoginProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </UserLoginProvider>
);
