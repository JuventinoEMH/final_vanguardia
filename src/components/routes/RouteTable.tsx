import { Ruta } from './types';

type Props = {
  rutas: Ruta[];
};

export default function RouteTable({ rutas }: Props) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2 text-white">Lista de Rutas</h3>
      {rutas.length === 0 ? (
        <p className="text-gray-300">No hay rutas aún.</p>
      ) : (
        <table className="min-w-full bg-white text-black border mt-2">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Origen</th>
              <th className="border p-2">Destino</th>
            </tr>
          </thead>
          <tbody>
            {rutas.map((ruta) => (
              <tr key={ruta.id}>
                <td className="border p-2">{ruta.id}</td>
                <td className="border p-2">{ruta.nombre}</td>
                <td className="border p-2">{ruta.origen}</td>
                <td className="border p-2">{ruta.destino}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
