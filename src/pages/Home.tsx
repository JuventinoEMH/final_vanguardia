export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br  from-gray-900 to-gray-700">
      <div className="text-center bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl shadow-2xl">
        <h1 className="text-5xl font-extrabold text-black mb-6 animate-pulse">Bienvenido al Panel de Bahías</h1>
        <p className="text-black text-lg mb-8">Por favor inicia sesión o regístrate para continuar.</p>
        <div className="flex justify-center space-x-6">
          <a href="/login" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300">
            Login
          </a>
          <a href="/register" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300">
            Registro
          </a>
        </div>
      </div>
    </div>
  );
}
