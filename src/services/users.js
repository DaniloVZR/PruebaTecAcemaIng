import axios from "axios";

export const generarUsuarios = async () => {
  const response = await axios("https://randomuser.me/api/?results=100");
  const usersData = response.data.results;
  return usersData;
}

export const listarUsuarios = async () => {
  const response = await axios("https://randomuser.me/api/?results=100");
  const usersData = response.data.results;
  return usersData;
}

export const login = async () => {
  const response = await axios("https://randomuser.me/api/?results=100");
  return response.data.results[0];
}

export const authenticateUser = async (email, password) => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=100");
    const users = response.data.results;
    const user = users.find(u => u.email === email);

    if (user) {
      return { success: true, user };
    }
    return { success: false, message: "User not found" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}