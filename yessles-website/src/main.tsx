import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <App />
      <Toaster richColors expand={true} offset={40} />
    </React.StrictMode>
  </>
);
