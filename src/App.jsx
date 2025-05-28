import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProvider } from './context/AuthContext.jsx'; // or just './context/AuthContext' and rely on bundler resolution
import Layout from './components/common/Layout';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;