import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/layout/layout";
import DocsPage from "../pages/paginaPrincipal";
import DocsListPage from "../pages/docsList";
import PrivacidadPage from "../pages/footer/privacidad";
import SoportePage from "../pages/footer/soporte";
import LoginPage from '../pages/Login/LoginPage';
import Dashboard from '../pages/Login/Dashboard';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import PublicRoute from '../components/auth/PublicRoute';
import ForgotPasswordPage from '../pages/Login/ForgotPassword';
import ResetPasswordPage from '../pages/Login/ResetPasswordPage';
import LoadingSpinner from '../components/auth/LoadingSpinner';

export default function AppRouter() {
  const { isAuthenticated, isLoading } = useAuth();

  // Mostrar loading mientras verifica autenticación
  if (isLoading) {
    return <LoadingSpinner message="Cargando..." />;
  }

  return (
    <Routes>
      {/* ==================== */}
      {/* 🔐 RUTAS PÚBLICAS */}
      {/* ==================== */}
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } 
      />
      
      <Route 
        path="/forgot-password" 
        element={
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        } 
      />
      
      <Route 
        path="/reset-password" 
        element={
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        } 
      />

      {/* ==================== */}
      {/* 🏠 RUTAS PROTEGIDAS CON LAYOUT */}
      {/* ==================== */}
      <Route 
        path="/app" 
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="docs" element={<DocsListPage />} />
        <Route path="upload" element={<DocsPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="privacidad" element={<PrivacidadPage />} />
        <Route path="soporte" element={<SoportePage />} />
        {/* ... otras rutas protegidas */}
      </Route>

      {/* ==================== */}
      {/* 🔄 REDIRECCIONES INTELIGENTES */}
      {/* ==================== */}
      
      {/* Si va a / y está autenticado → /app */}
      {/* Si va a / y NO está autenticado → /login */}
      <Route 
        path="/" 
        element={
          isAuthenticated ? 
            <Navigate to="/app" replace /> : 
            <Navigate to="/login" replace />
        } 
      />

      {/* Página 404 */}
      <Route 
        path="*" 
        element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-gray-600 mb-4">Página no encontrada</p>
              <Navigate 
                to={isAuthenticated ? "/app" : "/login"} 
                replace 
              />
            </div>
          </div>
        } 
      />
    </Routes>
  );
}