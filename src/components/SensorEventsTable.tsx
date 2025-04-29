import { useState } from 'react';

type SensorEvent = {
  id: number;
  sensorId: number;
  evento: string;
  fecha: string;
};

const events: SensorEvent[] = [
  { id: 1, sensorId: 1, evento: 'Activación', fecha: '2024-03-01 10:00' },
  { id: 2, sensorId: 2, evento: 'Desactivación', fecha: '2024-03-10 14:30' },
  { id: 3, sensorId: 3, evento: 'Activación', fecha: '2024-02-15 09:00' },
  { id: 4, sensorId: 4, evento: 'Desactivación', fecha: '2024-01-25 18:45' },
];

const removeAccents = (str: string) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default function SensorEventsTable() {
  const [filters, setFilters] = useState({ evento: '' });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, evento: e.target.value });
  };

  const filteredEvents = events.filter(event => {
    const eventoSinTilde = removeAccents(event.evento.toLowerCase());
    const filtroSinTilde = removeAccents(filters.evento.toLowerCase());
    return filtroSinTilde ? eventoSinTilde.includes(filtroSinTilde) : true;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Registros de Sensores</h3>

      <div className="mb-6">
        <label htmlFor="evento" className="mr-2 text-gray-700 font-medium">Filtrar por evento:</label>
        <input
          id="evento"
          type="text"
          value={filters.evento}
          onChange={handleFilterChange}
          placeholder="Activación, Desactivación"
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <table className="min-w-full table-auto text-sm">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-3 px-4 text-left font-medium">ID Evento</th>
            <th className="py-3 px-4 text-left font-medium">ID Sensor</th>
            <th className="py-3 px-4 text-left font-medium">Evento</th>
            <th className="py-3 px-4 text-left font-medium">Fecha</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredEvents.map(event => (
            <tr key={event.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-3 px-4 text-gray-800">{event.id}</td>
              <td className="py-3 px-4 text-gray-800">{event.sensorId}</td>
              <td className={`py-3 px-4 font-semibold ${event.evento === 'Activación' ? 'text-green-600' : 'text-red-600'}`}>
                {event.evento}
              </td>
              <td className="py-3 px-4 text-gray-800">{event.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
