import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

type DataType = {
  mes: string;
  autos: number;
};

const data: DataType[] = [
  { mes: 'Ene', autos: 30 },
  { mes: 'Feb', autos: 45 },
  { mes: 'Mar', autos: 60 },
  { mes: 'Abr', autos: 35 },
  { mes: 'May', autos: 50 },
];

export default function BarChartExample() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-black">
      <h3 className="text-xl font-semibold mb-4">Autos registrados por mes</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="autos" fill="#3182ce" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
