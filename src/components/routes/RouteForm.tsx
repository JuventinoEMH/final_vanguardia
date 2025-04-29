// src/components/routes/RouteForm.tsx

import { useState } from 'react';
import { Ruta } from './types';

type Props = {
  onAddRuta: (ruta: Ruta) => void;
};

export default function RouteForm({ onAddRuta }: Props) {
  const [formData, setFormData] = useState({ nombre: '', origen: '', destino: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevaRuta: Ruta = {
      id: Date.now(),
      nombre: formData.nombre,
      origen: formData.origen,
      destino: formData.destino,
    };
    onAddRuta(nuevaRuta);
    setFormData({ nombre: '', origen: '', destino: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md text-black">
      <div>
        <label className="block font-semibold">Nombre de la Ruta</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Origen</label>
        <input
          type="text"
          name="origen"
          value={formData.origen}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Destino</label>
        <input
          type="text"
          name="destino"
          value={formData.destino}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar Ruta
      </button>
    </form>
  );
}



// export default function RutaForm() {
//   return (
//     <div className="bg-white text-black p-4 rounded shadow mb-6">
//       <h3 className="text-xl font-semibold mb-2">Agregar Nueva Ruta</h3>
//       <form className="space-y-4">
//         <input type="text" placeholder="Nombre de la ruta" className="w-full border p-2 rounded" />
//         <input type="text" placeholder="Punto de origen" className="w-full border p-2 rounded" />
//         <input type="text" placeholder="Punto de destino" className="w-full border p-2 rounded" />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
//           Guardar Ruta
//         </button>
//       </form>
//     </div>
//   );
// }
