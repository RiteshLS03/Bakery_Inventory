// import { element } from "prop-types";
import Shop from "./components/Shop";
import { Header, Body, Footer } from "./components/index";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>SOMETHING WENT WRONG</h1>,
    children: [
      { path: "/", element: <Shop /> },
      {
        path: "/admin",
        element: <Body />,
      },
    ],
  },
]);

export default App;
