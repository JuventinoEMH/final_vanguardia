import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';
import Sensores from './pages/Sensores';
import Estadisticas from './pages/Estadisticas';
import Rutas from './pages/Rutas';
import Perfil from './pages/Perfil';
import ProtectedRoute from './components/routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardHome />} /> 
          <Route path="sensores" element={<Sensores />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="rutas" element={<Rutas />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
