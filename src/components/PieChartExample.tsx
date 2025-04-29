import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

type PieData = {
  tipo: string;
  valor: number;
};

const data: PieData[] = [
  { tipo: 'Autos', valor: 400 },
  { tipo: 'Motos', valor: 300 },
  { tipo: 'Camiones', valor: 300 },
];

const COLORS = ['#3182ce', '#63b3ed', '#90cdf4'];

export default function PieChartExample() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-black">
      <h3 className="text-xl font-semibold mb-4">Distribución de vehículos</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="valor" 
            nameKey="tipo" 
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (  
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
