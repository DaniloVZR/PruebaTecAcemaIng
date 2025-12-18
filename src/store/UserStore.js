import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { listarUsuarios, login, authenticateUser, generarUsuarios } from '../services/users';

export const useUsuarioStore = create()(devtools((set) => ({
  count: 1,
  admin: {
    correo: "admin@correo.com",
    password: "admin123"
  },
  estaLogeado: false,
  usuarios: [],

  inc: () => set((state) => ({ count: state.count + 1 })),

  generarUsuarios: async () => {
    try {
      const usuariosGenerados = await generarUsuarios();
      set({ usuarios: usuariosGenerados });
    } catch (e) {
      console.log('error');
    }
  },

  elegirAdmin: () => {
    set((state) => ({
      admin: state.usuarios[0] || state.admin
    }));
  },

  listarUsuarios: async () => {
    const usuarios = await listarUsuarios();
    set({ usuarios });
    return usuarios;
  },

  auth: (email, password) => {
    set((state) => {
      if (email === state.admin.correo && password === state.admin.password) {
        return { estaLogeado: true };
      } else {
        return { estaLogeado: false };
      }
    });
  },
})));