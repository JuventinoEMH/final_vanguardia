// src/components/routes/RouteTable.tsx

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



// type Ruta = {
//   id: number;
//   nombre: string;
//   origen: string;
//   destino: string;
//   estado: string;
// };

// const rutas: Ruta[] = [
//   { id: 1, nombre: 'Ruta 1', origen: 'Centro', destino: 'Campus', estado: 'Activa' },
//   { id: 2, nombre: 'Ruta 2', origen: 'Norte', destino: 'Sur', estado: 'Inactiva' },
// ];

// export default function RutasTable() {
//   return (
//     <div className="bg-white text-black p-4 rounded shadow mb-6">
//       <h3 className="text-lg font-medium mb-4">Listado de Rutas</h3>
//       <table className="w-full table-auto border-collapse">
//         <thead>
//           <tr>
//             <th className="border p-2">Nombre</th>
//             <th className="border p-2">Origen</th>
//             <th className="border p-2">Destino</th>
//             <th className="border p-2">Estado</th>
//             <th className="border p-2">Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rutas.map(ruta => (
//             <tr key={ruta.id}>
//               <td className="border p-2">{ruta.nombre}</td>
//               <td className="border p-2">{ruta.origen}</td>
//               <td className="border p-2">{ruta.destino}</td>
//               <td className="border p-2">{ruta.estado}</td>
//               <td className="border p-2">
//                 <button className="text-blue-600 hover:underline mr-2">Editar</button>
//                 <button className="text-red-600 hover:underline">Eliminar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
