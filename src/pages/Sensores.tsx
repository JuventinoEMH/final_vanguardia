import SensorTable from '../components/SensorTable';
import SensorEventsTable from '../components/SensorEventsTable';

export default function Sensores() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Sensores</h2>
      <p>Aquí se mostrarán los datos de los sensores.</p>

      <SensorTable />
      <SensorEventsTable />
    </div>
  );
}
