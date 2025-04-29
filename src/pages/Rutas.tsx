// src/pages/dashboard/Rutas.tsx

import { useState } from 'react';
import RouteForm from '../components/routes/RouteForm';
import RouteTable from '../components/routes/RouteTable';
import { Ruta } from '../components/routes/types';
import MapaRutas from '../components/MapaRutas';


export default function Rutas() {
  const [rutas, setRutas] = useState<Ruta[]>([]);

  const agregarRuta = (nuevaRuta: Ruta) => {
    setRutas((prev) => [...prev, nuevaRuta]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Gestión de Rutas</h2>
      <RouteForm onAddRuta={agregarRuta} />
      <RouteTable rutas={rutas} />
      <MapaRutas/>
    </div>
  );
}



// import RutaForm from '../components/routes/RouteForm';
// import RutasFilter from '../components/RutasFilter';
// import RutasTable from '../components/routes/RouteTable';
// import MapaRutas from '../components/MapaRutas';

// export default function Rutas() {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Rutas</h2>
//       <p className="mb-6 text-gray-200">Administra, visualiza y configura las rutas del sistema.</p>

//       <RutaForm />
//       <RutasFilter />
//       <RutasTable />
//       <MapaRutas />
//     </div>
//   );
// }


// // export default function Rutas() {
// //   return (
// //     <div>
// //       <h2 className="text-2xl font-bold">Rutas</h2>
// //       <p>Aquí se gestionarán las rutas.</p>
// //     </div>
// //   );
// // }
