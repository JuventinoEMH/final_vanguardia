
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
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">Agregar Ruta</h2>

      <div>
        <label className="block font-medium text-gray-700">Nombre de la Ruta</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Origen</label>
        <input
          type="text"
          name="origen"
          value={formData.origen}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Destino</label>
        <input
          type="text"
          name="destino"
          value={formData.destino}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
      >
        Agregar Ruta
      </button>
    </form>
  );
}
