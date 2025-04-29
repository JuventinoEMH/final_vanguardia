import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (user.trim() === '' || pass.trim() === '') {
      alert('Por favor completa todos los campos.');
      return;
    }

    localStorage.setItem('user', user);
    localStorage.setItem('pass', pass);
    alert('¡Registrado con éxito!');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white px-4">
      <div className="bg-black bg-opacity-30 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Crear Cuenta</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={e => setUser(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-white bg-opacity-20 text-white 
                     placeholder-black border border-white focus:outline-none 
                     focus:ring-2 focus:ring-green-400"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={e => setPass(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-white bg-opacity-20 text-white 
                     placeholder-black border border-white focus:outline-none 
                     focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
        >
          Registrarme
        </button>

        <p className="mt-4 text-center text-sm text-gray-300">
          ¿Ya tienes cuenta? <a href="/login" className="text-green-400 underline">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}
