import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserProvider from "./context/UserContext.tsx";

import "./styles/base/_main.scss";
import "./styles/base/_reset.scss";
import "./styles/base/_typography.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
