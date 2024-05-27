// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store, persistor } from "./utils/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <App />
          <Toaster richColors offset={40} position="top-center" />
        </HelmetProvider>
      </PersistGate>
    </Provider>
    {/* </React.StrictMode> */}
  </>
);
