import { RouterProvider } from "react-router-dom";

import tutorRouter from "@/routers/tutorRouter";
import publicRouter from "@/routers/publicRouter";
import adminRouter from "@/routers/adminRouter";
import { useSelector } from "react-redux";

function App() {
  const { userData } = useSelector((state: any) => state.user);

  return (
    <>
      {userData.role === "admin" ? (
        <RouterProvider router={adminRouter} />
      ) : userData.role === "tutor" ? (
        <RouterProvider router={tutorRouter} />
      ) : (
        <RouterProvider router={publicRouter} />
      )}
    </>
  );
}

export default App;
