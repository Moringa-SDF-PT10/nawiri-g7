import { createBrowserRouter } from "react-router-dom";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import PlaceholderStudentDashboard from "./PlaceholderStudentDashboard";
import PlaceholderTeacherDashboard from "./PlaceholderTeacherDashboard";
import App from "./App";
import ForgotPassword from "./auth/ForgotPassword";
import PlaceholderProfile from "./PlaceholderProfile";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/forgot-password", element: <ForgotPassword /> },

  {
    path: "/dashboard-teacher",
    element: (
      <PrivateRoute>
        {" "}
        <PlaceholderTeacherDashboard />{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard-student",
    element: (
      <PrivateRoute>
        <PlaceholderStudentDashboard />{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/new-student",
    element: (
      <PrivateRoute>
        <PlaceholderProfile />{" "}
      </PrivateRoute>
    ),
  },
]);
