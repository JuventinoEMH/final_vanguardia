export default function RutasFilter() {
  return (
    <div className="bg-white text-black p-4 rounded shadow mb-6">
      <h3 className="text-lg font-medium mb-2">Filtrar rutas</h3>
      <input type="text" placeholder="Buscar por nombre o destino" className="w-full border p-2 rounded" />
    </div>
  );
}
