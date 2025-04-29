import { useState } from 'react';
import RouteForm from '../components/routes/RouteForm';
import RouteTable from '../components/routes/RouteTable';
import { Ruta } from '../components/routes/types';
// import MapaRutas from '../components/MapaRutas';


export default function Rutas() {
  const [rutas, setRutas] = useState<Ruta[]>([]);

  const agregarRuta = (nuevaRuta: Ruta) => {
    setRutas((prev) => [...prev, nuevaRuta]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white text-center mt-7 mb-10">Gestión de Rutas</h2>
      <RouteForm onAddRuta={agregarRuta} />
      <RouteTable rutas={rutas} />
      {/* <MapaRutas/> */}
    </div>
  );
}



