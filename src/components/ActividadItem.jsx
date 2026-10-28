import { motion } from "framer-motion";
function ActividadItem({ tituloActividad, duracion, etapaDidactica }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      style={{
        border: "2px solid #e2e8f0",
        padding: "20px 15px",
        borderRadius: "8px",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        color: "#1e293b"
      }}
    >      
      <div>
        <span
          style={{
            backgroundColor: "#e0f2fe",
            color: "#0369a1",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "0.75em",
            fontWeight: "bold"
          }}
        >
          {etapaDidactica}
        </span>

        <h4>{tituloActividad}</h4>
      </div>
      <span style={{ color: "#64748b" }}>
        ⏱️ {duracion}
      </span>
    </motion.div>
  );
}

export default ActividadItem;