import BarChartExample from '../components/BarChartExample';
import LineChartExample from '../components/LineChartExample';
import PieChartExample from '../components/PieChartExample';

export default function Estadisticas() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Estadísticas</h2>
      <p>Aquí se mostrarán las estadísticas de uso.</p>

      <BarChartExample />
      <LineChartExample/>
      <PieChartExample/>
      
    </div>
  );
}
