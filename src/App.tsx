import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from "./components/Admin"
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import NotFound from "./components/NotFound";
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';

const isAdminAuthenticated = () => {
  // Check if admin is logged in by verifying localStorage
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  return isAdmin === "true" && !!token;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return isAdminAuthenticated() ? <>{children}</> : <Navigate to="/" replace />;
};

const MainSite = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
}


export default App;