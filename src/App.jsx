// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes'; // Import AppRoutes
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    const fetchedUser = { id: 1, name: 'student', email: 'student@example.com', role: 'student' };
    setTimeout(() => {
      setUser(fetchedUser);
    }, 500);
  }, []);

  if (user === null) {
    return <div>Loading user data...</div>;
  }

  return (
    <Router>
      {/* Pass the user state to AppRoutes */}
      <AppRoutes user={user} />
    </Router>
  );
}

export default App;