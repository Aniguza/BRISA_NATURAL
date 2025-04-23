// Login.jsx (ejemplo rápido)
import React from "react";
import { useAuth } from "./AuthContext";

export const Login = () => {
  const { login } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Iniciar sesión</h2>
      <button
        onClick={() => login({ name: "Usuario demo" })}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Entrar
      </button>
    </div>
  );
};
