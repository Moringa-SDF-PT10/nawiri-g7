import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CoursesPage from './pages/CoursesPage';
import LessonsPage from './pages/LessonsPage';
import ProfilePage from './pages/ProfilePage';

const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage user={user} />} />
      <Route path="/courses" element={<CoursesPage user={user} />} />
      <Route path="/lessons" element={<LessonsPage user={user} />} />
      <Route path="/profile" element={<ProfilePage user={user} />} />
    </Routes>
  );
};

export default AppRoutes;