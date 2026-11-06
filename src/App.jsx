import ListaActividades from './components/ListaActividades';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', color: '#156ca7', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1>USO DE LAS MAYUSCULAS</h1>
      <p>Practica el uso correcto de las mayúsculas en textos y en era digital.</p>
     
      {/* Renderizamos nuestro componente conectado a la base de datos */}
      <ListaActividades />
    </div>
  );
}

