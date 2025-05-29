import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PlaceholderStudentDashboard from "./PlaceholderStudentDashboard";
import PlaceholderTeacherDashboard from "./PlaceholderTeacherDashboard";
import App from "./App";
import ForgotPassword from "./auth/ForgotPassword";
import PlaceholderProfile from "./PlaceholderProfile";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/signin", element: <SignInPage /> },
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
