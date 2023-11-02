import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({});
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRouter} />
      </QueryClientProvider>
    </>
  );
}

export default App;
