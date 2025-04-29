import BarChartExample from '../components/BarChartExample';
import LineChartExample from '../components/LineChartExample';
import PieChartExample from '../components/PieChartExample';

export default function Estadisticas() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-10 mt-7">Estadísticas</h2>

      <BarChartExample />
      <LineChartExample/>
      <PieChartExample/>
      
    </div>
  );
}
