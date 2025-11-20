import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { PathConfig } from "@/utils/pathConfig";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const isOnline = currentUser ? currentUser[0]?.online : false;

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("users"));
    if (storedUser) setCurrentUser(storedUser);
    
    const storedUsers = JSON.parse(localStorage.getItem("allUsers"));
    if (storedUsers) setUsers(storedUsers);
    
    setLoading(false);
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("users", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("users");
    }
  }, [currentUser]);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("allUsers", JSON.stringify(users));
    }
  }, [users]);

  const login = (email, password) => {
    // Verificar si es el admin
    if (email === "admin@gmail.com" && password === "Admin123.") {
      const adminUser = {
        id: 0,
        name: "Admin",
        surname: "MOTORSHOP",
        email: "admin@gmail.com",
        online: true
      };
      setCurrentUser([adminUser]);
      setMessage("Inicio de sesión exitoso");
      return true;
    }

    // Verificar usuarios normales
    const userIndex = users.findIndex(
      (u) => u.email === email && u.password === password
    );
    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex].online = true;
      setUsers(updatedUsers);
      setCurrentUser([updatedUsers[userIndex]]);
      setMessage("Inicio de sesión exitoso");
      return true;
    } else {
      setMessage("Usuario o contraseña incorrecta");
      return false;
    }
  };

  const logout = () => {
    if (!currentUser) return;
    const updatedUsers = users.map((u) =>
      u.email === currentUser[0].email ? { ...u, online: false } : u
    );
    setUsers(updatedUsers);
    setCurrentUser(null);
    setMessage("")
    navigate(PathConfig.Login);
  };

  const register = ({ name, surname, email, password, online }) => {
    if (!name || !surname || !email || !password) {
      setMessage("Completa todos los campos");
      return false;
    }

    const exists = users.some((u) => u.email === email);
    if (exists) {
      setMessage("El usuario ya existe");
      return false;
    }

    const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;

    const newUser = {
      id: newId,
      name,
      surname,
      email,
      password,
      online
    };

    setUsers([...users, newUser]);
    setMessage("Usuario registrado con éxito");
    return true;
  };

  return (
    <AuthContext.Provider 
      value={{ 
        login, 
        logout, 
        register, 
        message, 
        setMessage, 
        currentUser, 
        isOnline, 
        loading,
        users,
        setUsers
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Hook para consumir el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe ser usado dentro de AuthProvider");
  }
  return context;
};
