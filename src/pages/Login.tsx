import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUser = localStorage.getItem('user');
    const savedPass = localStorage.getItem('pass');
    if (user === savedUser && pass === savedPass) {
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white px-4">
      <div className="bg-black bg-opacity-30 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={e => setUser(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-white bg-opacity-20 text-white 
                     placeholder-black border border-white focus:outline-none 
                     focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={e => setPass(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-white bg-opacity-20 text-white 
                     placeholder-black border border-white focus:outline-none 
                     focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
        >
          Entrar
        </button>

        <p className="mt-4 text-center text-sm text-gray-300">
          ¿No tienes cuenta? <a href="/register" className="text-blue-400 underline">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}