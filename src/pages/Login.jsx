import { useState } from "react";
import { useUsuarioStore } from "../store/UserStore.js";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const Login = () => {

  const navigate = useNavigate();
  const { auth, estaLogeado, generarUsuarios, elegirAdmin, admin } = useUsuarioStore();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    elegirAdmin()
  }, [])

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth(formData.email, formData.password);

    const estadoActual = estaLogeado;

    if (estadoActual) {
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  }

  return (
    <div className="w-max h-screen mx-auto my-auto flex flex-col justify-center gap-4">
      <div className="bg-sky-800 p-8 rounded-lg text-white w-100 h-100">
        <h1 className="font-medium text-4xl text-center mb-8">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              className="block mb-2.5 text-sm font-medium text-heading"
              htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              required
              className="bg-blue-950 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            />
          </div>
          <div>
            <label
              className="block mb-2.5 text-sm font-medium text-heading"
              htmlFor="password">Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              className="bg-blue-950 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            />
          </div>
          <button
            type="submit"
            className="block bg-green-500 font-semibold mt-10 mx-auto px-4 py-2"
          >

            Login
          </button>
        </form>
      </div>
    </div>
  )
}
