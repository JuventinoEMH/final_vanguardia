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
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-black ">Sensores Activos</h3>
      
      <div className="mb-4">
        <label htmlFor="estado" className="mr-2 text-black">Filtrar por estado:</label>
        <input
          id="estado"
          type="text"
          value={filters.estado}
          onChange={handleFilterChange}
          placeholder="Activo o Inactivo"
          className="border p-2 rounded text-black"
        />
      </div>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-black">ID</th>
            <th className="border p-2 text-black">Nombre</th>
            <th className="border p-2 text-black">Estado</th>
            <th className="border p-2 text-black">Fecha de Activación</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(sensor => (
            <tr key={sensor.id}>
              <td className="border p-2 text-black">{sensor.id}</td>
              <td className="border p-2 text-black">{sensor.nombre}</td>
              <td className="border p-2 text-black">{sensor.estado}</td>
              <td className="border p-2 text-black">{sensor.fechaActivacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}