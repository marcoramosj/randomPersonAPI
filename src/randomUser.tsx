import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface User {
  name: { first: string; last: string };
  email: string;
  dob: { date: string };
  phone: string;
  login: { password: string };
  picture: { large: string };
}

const RandomUser: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedInfo, setSelectedInfo] = useState<string>("name");

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const getSelectedInfo = () => {
    if (!user) return "";
    switch (selectedInfo) {
      case "name":
        return `${user.name.first} ${user.name.last}`;
      case "email":
        return user.email;
      case "birthday":
        return new Date(user.dob.date).toLocaleDateString();
      case "phone":
        return user.phone;
      case "password":
        return user.login.password;
      default:
        return "";
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {loading ? (
        <p className="text-lg text-gray-500">Cargando...</p>
      ) : user ? (
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center w-96 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Cuadro de Fondo */}
          <div className="bg-gray-100 w-full h-40 rounded-t-lg flex justify-center items-center">
            <motion.img
              src={user.picture.large}
              alt="User"
              className="w-32 h-32 rounded-full border-4 border-gray-300 bg-white"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Informacin Seleccionada */}
          <p className="text-gray-500 mt-6">My {selectedInfo} is</p>
          <motion.p
            key={selectedInfo}
            className="text-xl font-bold mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getSelectedInfo()}
          </motion.p>
          
          {/* Selector de Informacion */}
          <div className="flex justify-around w-full mt-6 bg-gray-100 p-2 rounded-lg">
            {["name", "email", "birthday", "phone", "password"].map((type) => (
              <motion.button
                key={type}
                className={`px-4 py-2 text-gray-600 rounded-lg transition-all duration-300 ${
                  selectedInfo === type ? "bg-green-500 text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedInfo(type)}
                whileHover={{ scale: 1.25 }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Boton para generar nuevo usuario */}
          <button
            onClick={fetchUser}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Nuevo Usuario
          </button>
        </motion.div>
      ) : (
        <p>Error al cargar el usuario.</p>
      )}
    </div>
  );
};

export default RandomUser;