import SensorTable from '../components/SensorTable';
import SensorEventsTable from '../components/SensorEventsTable';

export default function Sensores() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-10 mt-7">Sensores</h2>
      
      <SensorTable />
      <SensorEventsTable />
    </div>
  );
}
