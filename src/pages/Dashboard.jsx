import { useEffect, useState } from "react";
import { useUsuarioStore } from "../store/UserStore";
import { useNavigate } from "react-router";
import { UserCard } from "../components/UserCard";
import { Loader } from "../components/Loader";

export const Dashboard = () => {

  const { usuarios, listarUsuarios } = useUsuarioStore();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    listarUsuarios();
  }, [listarUsuarios]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsuarios = usuarios.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(usuarios.length / itemsPerPage);

  return (
    <div className="m-2">
      <div className="flex justify-between my-6 mx-5 md:mx-auto md:w-3/4">
        <h1 className="font-medium text-4xl">Dashboard</h1>
        <button
          className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => navigate("/login")}
        >
          Cerrar Sesión
        </button>
      </div>

      <div className="flex justify-center gap-2 my-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Anterior
        </button>
        <span className="px-4 py-2">{currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Siguiente
        </button>
      </div>

      {
        currentUsuarios.length == 0 ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {currentUsuarios.map((user, index) => (
              <UserCard
                key={index}
                id={user.id.value ? user.id.value : "Sin identificar"}
                image={user.picture.thumbnail}
                name={user.name.first}
                lastname={user.name.last}
                email={user.email}
                phone={user.phone}
                ciudad={user.location.city}
                country={user.location.country}
              />
            ))}
          </div>
        )
      }
    </div>
  )
}
