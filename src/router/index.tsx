import { createBrowserRouter } from "react-router-dom";
import HomePage from "../ui/pages/home/HomePage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
      </>
    ),
  },
]);
