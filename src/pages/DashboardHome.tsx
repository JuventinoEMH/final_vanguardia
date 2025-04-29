export default function DashboardHome() {
  return (
    <div className="bg-white p-8 rounded-lg text-[#1E3A8A]">
      <h1 className="text-4xl font-bold mb-6 text-center animate__animated animate__fadeIn">
        Welcome
      </h1>

      <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-lg mb-6 hover:scale-105 transform transition duration-300 ease-in-out">
        <h2 className="text-2xl font-semibold mb-4">Tu panel personalizado</h2>
        <p className="text-lg text-[#374151]">
          Estás conectado a un sistema de gestión inteligente para la administración de espacios de estacionamiento.
          Aquí podrás monitorear el estado de los sensores, gestionar el uso de los espacios y mucho más, todo en tiempo real.
        </p>
      </div>

      <div className="flex space-x-6 mb-6">
        <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-lg w-1/2 hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <img src="https://img.icons8.com/ios/50/0EA5E9/sensor.png" alt="Sensor Icon" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Estado de Sensores</h3>
          <p className="text-lg text-[#374151]">Monitorea el estado en tiempo real de todos los sensores IoT.</p>
        </div>

        <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-lg w-1/2 hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <img src="https://img.icons8.com/ios/50/0EA5E9/parking.png" alt="Parking Icon" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Gestión de Espacios</h3>
          <p className="text-lg text-[#374151]">Visualiza y administra los espacios de estacionamiento de manera eficiente.</p>
        </div>
      </div>

      <div className="flex space-x-6 mb-6">
        <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-lg w-1/2 hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <img src="https://img.icons8.com/ios/50/10B981/combo-chart.png" alt="Estadísticas Icon" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Estadísticas del Sistema</h3>
          <p className="text-lg text-[#374151]">Consulta gráficos, tendencias y reportes clave del sistema.</p>
        </div>

        <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-lg w-1/2 hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <img src="https://img.icons8.com/ios/50/FBBF24/route.png" alt="Rutas Icon" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Rutas de Estacionamiento</h3>
          <p className="text-lg text-[#374151]">Optimiza el acceso guiado a espacios libres mediante rutas inteligentes.</p>
        </div>
      </div>

      <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">¿Qué puedes hacer ahora?</h3>
        <ul className="list-disc pl-6 text-lg text-[#374151]">
          <li>Ver el estado de los sensores IoT.</li>
          <li>Gestionar los espacios de estacionamiento.</li>
          <li>Visualizar estadísticas de uso con gráficas interactivas.</li>
        </ul>
        <p className="mt-4 text-lg text-[#374151]">Todo esto está disponible en el menú izquierdo. ¡Haz clic y empieza a interactuar!</p>
      </div>
    </div>
  );
}
