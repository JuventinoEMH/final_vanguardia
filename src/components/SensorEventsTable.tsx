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
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-xl font-semibold mb-4 text-black">Registros de Sensores</h3>

      <div className="mb-4">
        <label htmlFor="evento" className="mr-2 text-black">Filtrar por evento:</label>
        <input
          id="evento"
          type="text"
          value={filters.evento}
          onChange={handleFilterChange}
          placeholder="Activación, Desactivación"
          className="border p-2 rounded text-black"
        />
      </div>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-black">ID Evento</th>
            <th className="border p-2 text-black">ID Sensor</th>
            <th className="border p-2 text-black">Evento</th>
            <th className="border p-2 text-black">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map(event => (
            <tr key={event.id}>
              <td className="border p-2 text-black">{event.id}</td>
              <td className="border p-2 text-black">{event.sensorId}</td>
              <td className="border p-2 text-black">{event.evento}</td>
              <td className="border p-2 text-black">{event.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
