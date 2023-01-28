import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageHeader from "./components/PageHeader";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NewOrders from "./pages/NewOrders";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Sidebar />
        <PageHeader />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/new-orders",
          element: <NewOrders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
