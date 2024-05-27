import { RouterProvider } from "react-router-dom";
import publicRouter from "@/routers/publicRouter";

function App() {
  return (
    <>
      <RouterProvider router={publicRouter} />
    </>
  );
}

export default App;
