// src/routes.js
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CoursesPage from './pages/CoursesPage';
import LessonsPage from './pages/LessonsPage';
import ProfilePage from './pages/ProfilePage';

// AppRoutes now accepts the 'user' prop
const AppRoutes = ({ user }) => { // <--- Receive user here
    return (
        <Routes>
            {/* Pass user to each page component */}
            <Route path="/dashboard" element={<DashboardPage user={user} />} />
            <Route path="/courses" element={<CoursesPage user={user} />} />
            <Route path="/lessons" element={<LessonsPage user={user} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            {/* You might want a redirect for the root path */}
            <Route path="/" element={<DashboardPage user={user} />} />
        </Routes>
    );
};

export default AppRoutes;