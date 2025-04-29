import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu, FiChevronLeft, FiLogOut, FiHome, FiBarChart2, FiMap, FiUser, FiCpu } from 'react-icons/fi';

export default function Dashboard() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(() => {
    // Lee el estado del localStorage en la carga inicial
    const storedState = localStorage.getItem('sidebarOpen');
    return storedState === null ? true : storedState === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sidebarOpen', sidebarOpen.toString());
  }, [sidebarOpen]);

  const handleLogout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br  from-gray-900 to-gray-700 text-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300  to-gray-700  p-4 flex flex-col`}>
        <button onClick={toggleSidebar} className="mb-4 text-white text-2xl hover:text-blue-400">
          {sidebarOpen ? <FiChevronLeft /> : <FiMenu />}
        </button>

        {sidebarOpen && (
          <>
            <h2 className="text-2xl font-bold mb-8">Panel</h2>
            <ul className="space-y-4">
              <li>
                <Link to="/dashboard" className="flex items-center gap-2 text-lg hover:text-blue-400">
                  <FiHome /> Inicio
                </Link>
              </li>
              <li>
                <Link to="/dashboard/sensores" className="flex items-center gap-2 text-lg hover:text-blue-400">
                  <FiCpu /> Sensores
                </Link>
              </li>
              <li>
                <Link to="/dashboard/estadisticas" className="flex items-center gap-2 text-lg hover:text-blue-400">
                  <FiBarChart2 /> Estadísticas
                </Link>
              </li>
              <li>
                <Link to="/dashboard/rutas" className="flex items-center gap-2 text-lg hover:text-blue-400">
                  <FiMap /> Rutas
                </Link>
              </li>
              <li>
                <Link to="/dashboard/perfil" className="flex items-center gap-2 text-lg hover:text-blue-400">
                  <FiUser /> Perfil
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-lg text-red-500 hover:text-red-400 mt-8"
                >
                  <FiLogOut /> Cerrar Sesión
                </button>
              </li>
            </ul>
          </>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
