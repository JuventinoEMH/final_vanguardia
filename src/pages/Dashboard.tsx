import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      {}
      <div className="w-64 bg-gray-800 p-6">
        <h2 className="text-3xl font-bold mb-8">Panel de Administración</h2>
        <ul className="space-y-4">
        <li>
            <Link to="/dashboard" className="text-lg hover:text-blue-400">Inicio</Link> {}
          </li>
          <li>
            <Link to="/dashboard/sensores" className="text-lg hover:text-blue-400">Sensores</Link>
          </li>
          <li>
            <Link to="/dashboard/estadisticas" className="text-lg hover:text-blue-400">Estadísticas</Link>
          </li>
          <li>
            <Link to="/dashboard/rutas" className="text-lg hover:text-blue-400">Rutas</Link>
          </li>
          <li>
            <Link to="/dashboard/perfil" className="text-lg hover:text-blue-400">Perfil</Link>
          </li>
          <li>
            <button 
              onClick={handleLogout} 
              className="text-lg text-red-500 hover:text-red-400 mt-8"
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>

      {}
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet /> {}
      </div>
    </div>
  );
}
