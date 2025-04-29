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
