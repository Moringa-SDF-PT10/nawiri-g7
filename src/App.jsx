import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';
import SplitScreen from './SplitScreen';

function App() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const fetchUserData = () => {
      const fetchedUser = {
        id: 1,
        name: 'Student User',
        email: 'student@example.com',
        role: 'student'
      };
      setTimeout(() => {
        setUser(fetchedUser);
        setLoadingUser(false);
      }, 500);
    };

    fetchUserData();
  }, []);

  if (loadingUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Make SplitScreen the default page */}
      <Route path="/" element={<SplitScreen />} />

      {/* Public SplitScreen route (also accessible via /splitscreen) */}
      <Route path="/splitscreen" element={<SplitScreen />} />

      {/* All other routes handled by AppRoutes with user context */}
      <Route path="/*" element={<AppRoutes user={user} />} />
    </Routes>
  );
}

export default App;