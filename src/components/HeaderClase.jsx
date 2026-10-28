import { motion } from "framer-motion";
function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      style={{
        backgroundColor: "#295780",
        color: "white",
        padding: "30px",
        borderRadius: "8px"
      }}
    >
      <h1>{tituloTema}</h1>
      <p>
        Docente: {nombreDocente} | Horario: {horario} Grado: Primero Básico
      </p>
    </motion.header>
  );
}

export default HeaderClase;