import { Ruta } from './types';

type Props = {
  rutas: Ruta[];
};

export default function RouteTable({ rutas }: Props) {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-4 text-white">Lista de Rutas</h3>
      {rutas.length === 0 ? (
        <p className="text-gray-500">No hay rutas aún.</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Nombre</th>
              <th className="py-3 px-4 text-left">Origen</th>
              <th className="py-3 px-4 text-left">Destino</th>
            </tr>
          </thead>
          <tbody>
            {rutas.map((ruta) => (
              <tr key={ruta.id} className="border-t hover:bg-gray-100">
                <td className="py-3 px-4 text-gray-700">{ruta.id}</td>
                <td className="py-3 px-4 text-gray-700">{ruta.nombre}</td>
                <td className="py-3 px-4 text-gray-700">{ruta.origen}</td>
                <td className="py-3 px-4 text-gray-700">{ruta.destino}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
