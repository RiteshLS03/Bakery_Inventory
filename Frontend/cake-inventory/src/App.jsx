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
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

export default App;
