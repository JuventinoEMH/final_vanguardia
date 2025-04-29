import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

type LineData = {
  dia: string;
  visitantes: number;
};

const data: LineData[] = [
  { dia: 'Lun', visitantes: 100 },
  { dia: 'Mar', visitantes: 150 },
  { dia: 'Mié', visitantes: 130 },
  { dia: 'Jue', visitantes: 180 },
  { dia: 'Vie', visitantes: 200 },
];

export default function LineChartExample() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-black">
      <h3 className="text-xl font-semibold mb-4">Descargas por día</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visitantes" stroke="#2b6cb0" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
