import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PlaceholderStudentDashboard from "./PlaceholderStudentDashboard";
import PlaceholderTeacherDashboard from "./PlaceholderTeacherDashboard";
import App from "./App";
import ResetPassword from "./auth/ResetPassword";
import PlaceholderProfile from "./PlaceholderProfile";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout";
import SplitScreen from "./SplitScreen";
import ContactPage from "./ContactPage";
import About from "./About";
import HomePage from "./pages/DashboardOverview";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import DashboardHome from "./pages/DashboardHome";
import CoursesPage from "./pages/CoursesPage";
import LessonsPage from "./pages/LessonsPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardLayout from "./components/common/DashboardLayout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SplitScreen />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "/reset-password", element: <ResetPassword /> },
      {
        path: "/dashboard",
        element: <PrivateRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <DashboardHome />,
              },
              {
                path: "courses",
                element: <CoursesPage />,
              },
              {
                path: "lessons",
                element: <LessonsPage />,
              },
              {
                path: "profile",
                element: <ProfilePage />,
              },
              {
                path: "announcements",
                element: <AnnouncementsPage />,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "/dashboard-placeholder",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <PlaceholderStudentDashboard />,
      },
    ],
  },
]);
