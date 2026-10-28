import { motion } from "framer-motion";

function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        border: "2px solid #cbd5e1",
        borderLeft: "8px solid #0ea5e9",
        padding: "25px",
        borderRadius: "8px",
        backgroundColor: "#f8fafc",
        margin: "15px 0"
      }}
    >
      <h3 style={{ color: "#5e73a5" }}>
         Competencia: {competencia}
      </h3>

      <p style={{ color: "#475569" }}>
        Indicador de logro: {indicadorLogro}
      </p>
    </motion.div>
  );
}

export default ObjetivosCard;
