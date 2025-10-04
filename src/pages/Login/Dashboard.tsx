import { useEffect } from "react";
import { useDocuments } from "../../hooks/useDocuments";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { documents, fetchDocuments, loading, error } = useDocuments({
    autoFetch: false,
    initialParams: { limit: 100, page: 1 },
  });

  useEffect(() => {
    fetchDocuments({ limit: 100, page: 1 });
  }, []);

  // 📊 Estadísticas dinámicas
  const stats = documents.reduce(
    (acc, doc) => {
      acc.total += 1;

      const status = doc.status?.toLowerCase();

      if (status === "approved" || status === "aprobado") {
        acc.approved += 1;
      } else if (status === "review" || status === "en revisión") {
        acc.inReview += 1;
      } else {
        acc.pending += 1;
      }

      return acc;
    },
    { total: 0, inReview: 0, approved: 0, pending: 0 }
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Bienvenida */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Bienvenido</h1>
        <p className="mt-2 text-gray-600">
          Aquí podrás gestionar tus documentos, ver estadísticas y acceder a tus funciones rápidas.
        </p>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-sm font-medium text-gray-500">Documentos Subidos</h2>
          <p className="mt-2 text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Acciones rápidas</h2>
        <div className="flex space-x-4">
          <Link
            to="/app/upload"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Subir documento
          </Link>
          <Link
            to="/app/docs"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Ver documentos
          </Link>
        </div>
      </div>

      {/* Últimos documentos */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Últimos documentos</h2>

        {loading && <p className="text-gray-500">Cargando...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && documents.length === 0 && (
          <p className="text-gray-500">No hay documentos recientes</p>
        )}

        {documents.length > 0 && (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Nombre</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Estado</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-4 py-2">{doc.title}</td>
                  <td className="px-4 py-2 capitalize">{doc.status || "Pendiente"}</td>
                  <td className="px-4 py-2">
                    {new Date(doc.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
