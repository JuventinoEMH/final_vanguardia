import { useState } from 'react';

type Sensor = {
  id: number;
  nombre: string;
  estado: string;
  fechaActivacion: string;
};

const data: Sensor[] = [
  { id: 1, nombre: 'Sensor 1', estado: 'Activo', fechaActivacion: '2024-03-01' },
  { id: 2, nombre: 'Sensor 2', estado: 'Inactivo', fechaActivacion: '2024-03-10' },
  { id: 3, nombre: 'Sensor 3', estado: 'Activo', fechaActivacion: '2024-02-15' },
  { id: 4, nombre: 'Sensor 4', estado: 'Inactivo', fechaActivacion: '2024-01-25' },
];

export default function SensorTable() {
  const [filters, setFilters] = useState({ estado: '' });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, estado: e.target.value });
  };

  const filteredData = data.filter(sensor => {
    return filters.estado ? sensor.estado.toLowerCase().includes(filters.estado.toLowerCase()) : true;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sensores Activos</h3>
      
      <div className="mb-6">
        <label htmlFor="estado" className="mr-2 text-gray-700 font-medium">Filtrar por estado:</label>
        <input
          id="estado"
          type="text"
          value={filters.estado}
          onChange={handleFilterChange}
          placeholder="Activo o Inactivo"
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <table className="min-w-full table-auto text-sm">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-3 px-4 text-left font-medium">ID</th>
            <th className="py-3 px-4 text-left font-medium">Nombre</th>
            <th className="py-3 px-4 text-left font-medium">Estado</th>
            <th className="py-3 px-4 text-left font-medium">Fecha de Activación</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredData.map(sensor => (
            <tr key={sensor.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-3 px-4 text-gray-800">{sensor.id}</td>
              <td className="py-3 px-4 text-gray-800">{sensor.nombre}</td>
              <td className={`py-3 px-4 font-semibold ${sensor.estado === 'Activo' ? 'text-green-600' : 'text-red-600'}`}>
                {sensor.estado}
              </td>
              <td className="py-3 px-4 text-gray-800">{sensor.fechaActivacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}