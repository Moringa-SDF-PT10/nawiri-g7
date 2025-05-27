import { createBrowserRouter } from "react-router-dom";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import PlaceholderStudentDashboard from "./PlaceholderStudentDashboard";
import PlaceholderTeacherDashboard from "./PlaceholderTeacherDashboard";
import App from "./App";
import ForgotPassword from "./auth/ForgotPassword";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <LogIn /> },
  { path: "/forgot-password", element: <ForgotPassword /> },

  { path: "/dashboard-teacher", element: <PlaceholderTeacherDashboard /> },
  { path: "/dashboard-student", element: <PlaceholderStudentDashboard /> },
]);
